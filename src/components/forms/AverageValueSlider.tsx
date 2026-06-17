"use client";

import { useId, useState } from "react";
import type {
  FieldErrors,
  FieldPath,
  FieldValues,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

const valueSteps = [
  100, 250, 500, 750, 1000, 1250, 1500, 2000, 2500, 3000, 4000, 5000, 7500,
  10000, 15000, 20000, 30000, 50000, 75000, 100000,
];

const defaultIndex = valueSteps.indexOf(2500);

export const defaultAverageCustomerValue = formatAverageValue(
  valueSteps[defaultIndex],
);

function formatAverageValue(value: number) {
  return `$${new Intl.NumberFormat("en-AU").format(value)}`;
}

export function AverageValueSlider<TValues extends FieldValues>({
  name,
  label,
  register,
  setValue,
  errors,
}: {
  name: FieldPath<TValues>;
  label: string;
  register: UseFormRegister<TValues>;
  setValue: UseFormSetValue<TValues>;
  errors: FieldErrors<TValues>;
}) {
  const id = useId();
  const error = errors[name];
  const [index, setIndex] = useState(defaultIndex);
  const formattedValue = formatAverageValue(valueSteps[index]);
  const updateValue = (nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(valueSteps.length - 1, nextIndex));
    const nextValue = formatAverageValue(valueSteps[boundedIndex]);

    setIndex(boundedIndex);
    setValue(name, nextValue as PathValue<TValues, typeof name>, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <label htmlFor={id} className="block w-full min-w-0">
      <span className="form-label">{label}</span>
      <input type="hidden" {...register(name)} />
      <div className={`value-slider ${error ? "input-error" : ""}`}>
        <div className="value-slider__display" id={`${id}-value`}>
          <span>Approx.</span>
          <strong>{formattedValue}</strong>
          <span>AUD</span>
        </div>
        <input
          id={id}
          type="range"
          data-testid={`${name}-range`}
          min={0}
          max={valueSteps.length - 1}
          value={index}
          aria-describedby={`${id}-value`}
          className="value-slider__range"
          onChange={(event) => {
            updateValue(Number(event.currentTarget.value));
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowUp") {
              event.preventDefault();
              updateValue(index + 1);
            }
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
              event.preventDefault();
              updateValue(index - 1);
            }
            if (event.key === "Home") {
              event.preventDefault();
              updateValue(0);
            }
            if (event.key === "End") {
              event.preventDefault();
              updateValue(valueSteps.length - 1);
            }
          }}
        />
        <div className="value-slider__scale" aria-hidden="true">
          <span>$100</span>
          <span>$1k</span>
          <span>$5k</span>
          <span>$20k</span>
          <span>$100k+</span>
        </div>
      </div>
      {error && <span className="form-error">{String(error.message)}</span>}
    </label>
  );
}
