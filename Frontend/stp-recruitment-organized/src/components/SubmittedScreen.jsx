import React from 'react';
import { CheckCircle2, AlertTriangle, RefreshCw, RotateCcw } from 'lucide-react';

export default function SubmittedScreen({ isSuccess = true, onReset }) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col items-center justify-center font-sans text-slate-900">
      <div className="max-w-xl w-full form-container overflow-hidden p-6 sm:p-10 text-center">
        
        {isSuccess ? (
          /* Success Screen */
          <div className="flex flex-col items-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Application submitted successfully
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed max-w-md">
              Thank you for applying to Steps Towards Progress (STP). Our board will review your application and contact you soon.
            </p>

            <button
              onClick={onReset}
              className="sign-btn w-auto min-w-[200px]"
            >
              <RefreshCw className="w-4 h-4" /> Submit another response
            </button>
          </div>
        ) : (
          /* Error Screen */
          <div className="flex flex-col items-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 text-[#BA1616] flex items-center justify-center mb-5 shadow-sm">
              <AlertTriangle className="w-10 h-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Problem with submitting please try again
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed max-w-md">
              There was a connection or server problem saving your application. Please check your network and try again.
            </p>

            <button
              onClick={onReset}
              className="sign-btn w-auto min-w-[200px]"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}