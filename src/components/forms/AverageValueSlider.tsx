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

const sliderMinValue = 50;
const sliderMaxValue = 1_000_000;
const sliderMinPosition = 0;
const sliderMaxPosition = 100;

const sliderTickLabels = [
  "$50",
  "$100",
  "$500",
  "$1k",
  "$5k",
  "$20k",
  "$100k",
  "$1m+",
];

export const defaultAverageCustomerValue = 2500;

export function formatAverageValue(value: number) {
  return `$${new Intl.NumberFormat("en-AU").format(value)}`;
}

export function parseAverageCustomerValue(value: unknown) {
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

  const suffix = rawValue.endsWith("k")
    ? "k"
    : rawValue.endsWith("m")
      ? "m"
      : null;
  const normalizedValue = rawValue
    .replace(/aud/g, "")
    .replace(/\$/g, "")
    .replace(/,/g, "")
    .replace(/\s/g, "")
    .replace(/[km]$/, "");
  const numericValue = Number(normalizedValue);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  if (suffix === "k") {
    return numericValue * 1000;
  }

  if (suffix === "m") {
    return numericValue * 1_000_000;
  }

  return numericValue;
}

export function sliderPositionToValue(position: number) {
  const boundedPosition = Math.max(
    sliderMinPosition,
    Math.min(sliderMaxPosition, position),
  );
  const ratio = boundedPosition / sliderMaxPosition;
  const minLog = Math.log(sliderMinValue);
  const maxLog = Math.log(sliderMaxValue);

  return Math.round(Math.exp(minLog + ratio * (maxLog - minLog)));
}

export function valueToSliderPosition(value: number) {
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

export function AverageValueSlider<TValues extends FieldValues>({
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
    defaultValue: defaultAverageCustomerValue as PathValue<TValues, typeof name>,
  });
  const numericValue = useMemo(
    () => parseAverageCustomerValue(watchedValue),
    [watchedValue],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(() =>
    formatAverageValue(defaultAverageCustomerValue),
  );
  const sliderPosition =
    numericValue === null
      ? sliderMinPosition
      : valueToSliderPosition(numericValue);
  const formattedValue =
    numericValue === null ? "" : formatAverageValue(Math.round(numericValue));
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
            placeholder="$5,000"
            onFocus={() => {
              setIsEditing(true);
              setInputValue(formattedValue);
            }}
            onChange={(event) => {
              const nextInputValue = event.currentTarget.value;

              setInputValue(nextInputValue);
              updateFormValue(parseAverageCustomerValue(nextInputValue));
            }}
            onBlur={() => {
              const parsedValue = parseAverageCustomerValue(inputValue);

              setIsEditing(false);
              updateFormValue(parsedValue, true);
              setInputValue(
                parsedValue === null
                  ? ""
                  : formatAverageValue(Math.round(parsedValue)),
              );
            }}
          />
          <span>AUD</span>
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
            const nextValue = sliderPositionToValue(Number(event.currentTarget.value));

            setIsEditing(false);
            updateFormValue(nextValue, true);
            setInputValue(formatAverageValue(nextValue));
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
