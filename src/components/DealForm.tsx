"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  dealSchema,
  type DealInput,
  type DealValues,
} from "@/lib/validation";
import { submitDeal } from "@/app/actions";

const labelCls = "block text-xs uppercase tracking-[0.14em] text-ink-muted mb-2";
const inputCls =
  "w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink placeholder:text-ink-muted/60 transition-colors hover:border-ink/30 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/20";
const errCls = "mt-1.5 text-xs text-red-700";

export function DealForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DealValues, unknown, DealInput>({
    resolver: zodResolver(dealSchema),
    defaultValues: {
      brokerName: "",
      brokerFirm: "",
      brokerEmail: "",
      brokerPhone: "",
      dealName: "",
      location: "",
      industry: "",
      annualRevenue: "",
      ebitda: "",
      includesRealEstate: false,
      askingPrice: "",
      cimUrl: "",
      notes: "",
      company_website: "",
    },
  });

  async function onSubmit(values: DealInput) {
    setServerError(null);
    const result = await submitDeal(values);
    if (result.ok) {
      router.push("/thank-you");
      return;
    }
    if (result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        setError(field as keyof DealValues, { message });
      }
    }
    setServerError(result.error ?? "Something went wrong. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-12">
      {/* Honeypot — visually hidden, off-screen, ignored by humans. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="brokerName" className={labelCls}>
            Your name <span className="text-bronze">*</span>
          </label>
          <input id="brokerName" className={inputCls} {...register("brokerName")} />
          {errors.brokerName && <p className={errCls}>{errors.brokerName.message}</p>}
        </div>

        <div>
          <label htmlFor="brokerFirm" className={labelCls}>
            Firm
          </label>
          <input id="brokerFirm" className={inputCls} {...register("brokerFirm")} />
        </div>

        <div>
          <label htmlFor="brokerEmail" className={labelCls}>
            Email <span className="text-bronze">*</span>
          </label>
          <input
            id="brokerEmail"
            type="email"
            autoComplete="email"
            className={inputCls}
            {...register("brokerEmail")}
          />
          {errors.brokerEmail && <p className={errCls}>{errors.brokerEmail.message}</p>}
        </div>

        <div>
          <label htmlFor="brokerPhone" className={labelCls}>
            Phone
          </label>
          <input
            id="brokerPhone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            {...register("brokerPhone")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="dealName" className={labelCls}>
            Deal name <span className="normal-case tracking-normal text-ink-muted">(blind / coded is fine)</span>
          </label>
          <input id="dealName" className={inputCls} {...register("dealName")} />
        </div>

        <div>
          <label htmlFor="location" className={labelCls}>
            Location
          </label>
          <input id="location" className={inputCls} {...register("location")} />
        </div>

        <div>
          <label htmlFor="industry" className={labelCls}>
            Industry
          </label>
          <input id="industry" className={inputCls} {...register("industry")} />
        </div>

        <div>
          <label htmlFor="annualRevenue" className={labelCls}>
            Annual revenue
          </label>
          <input
            id="annualRevenue"
            placeholder="e.g. $4.5M"
            className={inputCls}
            {...register("annualRevenue")}
          />
        </div>

        <div>
          <label htmlFor="ebitda" className={labelCls}>
            EBITDA
          </label>
          <input
            id="ebitda"
            placeholder="e.g. $1.2M"
            className={inputCls}
            {...register("ebitda")}
          />
        </div>

        <div>
          <label htmlFor="askingPrice" className={labelCls}>
            Asking price
          </label>
          <input
            id="askingPrice"
            placeholder="if known"
            className={inputCls}
            {...register("askingPrice")}
          />
        </div>

        <div className="flex items-center">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-sm border-line accent-bronze"
              {...register("includesRealEstate")}
            />
            Real estate is included
          </label>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cimUrl" className={labelCls}>
            Link to teaser / CIM
          </label>
          <input
            id="cimUrl"
            type="url"
            placeholder="https://"
            className={inputCls}
            {...register("cimUrl")}
          />
          {errors.cimUrl && <p className={errCls}>{errors.cimUrl.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelCls}>
            Notes
          </label>
          <textarea
            id="notes"
            rows={4}
            className={`${inputCls} resize-y`}
            {...register("notes")}
          />
        </div>
      </div>

      {serverError && (
        <p className="mt-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {serverError}
        </p>
      )}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn bg-ink text-cream hover:bg-bronze-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting…" : "Submit Deal"}
          {!isSubmitting && (
            <span className="btn-arrow" aria-hidden="true">
              &rarr;
            </span>
          )}
        </button>
        <p className="text-xs text-ink-muted">
          Held in strict confidence. We typically respond within two business days.
        </p>
      </div>
    </form>
  );
}
