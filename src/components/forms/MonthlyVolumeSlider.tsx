"use client";

import { useId, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useWatch } from "react-hook-form";

const sliderMinValue = 1;
const sliderMaxValue = 10_000;
const sliderMinPosition = 0;
const sliderMaxPosition = 100;

const sliderTickLabels = [
  "1",
  "5",
  "10",
  "25",
  "50",
  "100",
  "500",
  "10k+",
];

export const defaultMonthlyVolume = 75;

function formatMonthlyVolume(value: number) {
  return new Intl.NumberFormat("en-AU", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function parseMonthlyVolume(value: unknown) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== "string") {
    return null;
  }

  const rawValue = value.trim().toLowerCase();

  if (!rawValue) {
    return null;
  }

  const suffix = rawValue.endsWith("k") ? "k" : null;
  const normalizedValue = rawValue
    .replace(/,/g, "")
    .replace(/\+/g, "")
    .replace(/\s/g, "")
    .replace(/k$/, "");
  const numericValue = Number(normalizedValue);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  if (suffix === "k") {
    return numericValue * 1000;
  }

  return numericValue;
}

export function monthlyVolumeSliderPositionToValue(position: number) {
  const boundedPosition = Math.max(
    sliderMinPosition,
    Math.min(sliderMaxPosition, position),
  );
  const ratio = boundedPosition / sliderMaxPosition;
  const minLog = Math.log(sliderMinValue);
  const maxLog = Math.log(sliderMaxValue);

  return Math.round(Math.exp(minLog + ratio * (maxLog - minLog)));
}

export function monthlyVolumeToSliderPosition(value: number) {
  if (!Number.isFinite(value) || value <= sliderMinValue) {
    return sliderMinPosition;
  }

  if (value >= sliderMaxValue) {
    return sliderMaxPosition;
  }

  const minLog = Math.log(sliderMinValue);
  const maxLog = Math.log(sliderMaxValue);

  return Math.round(
    ((Math.log(value) - minLog) / (maxLog - minLog)) * sliderMaxPosition,
  );
}

export function MonthlyVolumeSlider<TValues extends FieldValues>({
  name,
  label,
  control,
  register,
  setValue,
  errors,
}: {
  name: FieldPath<TValues>;
  label: string;
  control: Control<TValues>;
  register: UseFormRegister<TValues>;
  setValue: UseFormSetValue<TValues>;
  errors: FieldErrors<TValues>;
}) {
  const id = useId();
  const error = errors[name];
  const watchedValue = useWatch({
    control,
    name,
    defaultValue: defaultMonthlyVolume as PathValue<TValues, typeof name>,
  });
  const numericValue = useMemo(
    () => parseMonthlyVolume(watchedValue),
    [watchedValue],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(() =>
    formatMonthlyVolume(defaultMonthlyVolume),
  );
  const sliderPosition =
    numericValue === null
      ? sliderMinPosition
      : monthlyVolumeToSliderPosition(numericValue);
  const formattedValue =
    numericValue === null ? "" : formatMonthlyVolume(Math.round(numericValue));
  const sliderStyle = {
    "--slider-progress": `${sliderPosition}%`,
  } as CSSProperties;

  const updateFormValue = (nextValue: number | null, shouldValidate = false) => {
    setValue(name, (nextValue ?? Number.NaN) as PathValue<TValues, typeof name>, {
      shouldDirty: true,
      shouldValidate,
    });
  };

  return (
    <label htmlFor={id} className="block w-full min-w-0">
      <span className="form-label">{label}</span>
      <input type="hidden" {...register(name)} />
      <div className={`value-slider ${error ? "input-error" : ""}`}>
        <div className="value-slider__display" id={`${id}-value`}>
          <span>APPROX.</span>
          <input
            id={id}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            aria-label={label}
            className="value-slider__input"
            value={isEditing ? inputValue : formattedValue}
            placeholder="100"
            onFocus={() => {
              setIsEditing(true);
              setInputValue(formattedValue);
            }}
            onChange={(event) => {
              const nextInputValue = event.currentTarget.value;

              setInputValue(nextInputValue);
              updateFormValue(parseMonthlyVolume(nextInputValue));
            }}
            onBlur={() => {
              const parsedValue = parseMonthlyVolume(inputValue);

              setIsEditing(false);
              updateFormValue(parsedValue, true);
              setInputValue(
                parsedValue === null
                  ? ""
                  : formatMonthlyVolume(Math.round(parsedValue)),
              );
            }}
          />
          <span>Monthly</span>
        </div>
        <input
          type="range"
          data-testid={`${name}-range`}
          min={sliderMinPosition}
          max={sliderMaxPosition}
          step={1}
          value={sliderPosition}
          aria-describedby={`${id}-value`}
          className="value-slider__range"
          style={sliderStyle}
          onChange={(event) => {
            const nextValue = monthlyVolumeSliderPositionToValue(
              Number(event.currentTarget.value),
            );

            setIsEditing(false);
            updateFormValue(nextValue, true);
            setInputValue(formatMonthlyVolume(nextValue));
          }}
        />
        <div className="value-slider__scale" aria-hidden="true">
          {sliderTickLabels.map((tickLabel) => (
            <span key={tickLabel}>{tickLabel}</span>
          ))}
        </div>
      </div>
      {error && <span className="form-error">{String(error.message)}</span>}
    </label>
  );
}
