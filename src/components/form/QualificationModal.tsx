'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { QUESTIONS, evaluateQualification } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Modal } from '@/components/ui/Modal';

interface QualificationModalProps {
  open: boolean;
  onClose: () => void;
}

type BasicData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const TOTAL_STEPS = 1 + QUESTIONS.length; // 1 datos básicos + 10 preguntas = 11

export function QualificationModal({ open, onClose }: QualificationModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = basic info, 1..10 = questions
  const [basicData, setBasicData] = useState<BasicData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  const isBasicStep = step === 0;
  const currentQuestion = isBasicStep ? null : QUESTIONS[step - 1];
  const currentAnswer = currentQuestion ? answers[currentQuestion.field] : null;

  const basicValid =
    basicData.firstName.trim().length > 0 &&
    basicData.lastName.trim().length > 0 &&
    basicData.email.trim().length > 0 &&
    basicData.phone.trim().length > 0;

  const canContinue = isBasicStep ? basicValid : !!currentAnswer;

  const handleSelect = (value: string) => {
    if (!currentQuestion) return;
    setAnswers({ ...answers, [currentQuestion.field]: value });
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    const qualification = evaluateQualification(answers);

    const payload = {
      ...basicData,
      ...answers,
      qualification,
      submittedAt: new Date().toISOString(),
      source: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submit failed');
      // Cerrar el modal y resetear estado antes de navegar a la página de gracias
      setSubmitting(false);
      onClose();

      switch (qualification) {
        case 'qualified':
          router.push('/exito');
          break;
        case 'rejected_capital':
          router.push('/gracias-capital');
          break;
        case 'rejected_timing':
          router.push('/gracias-timing');
          break;
        case 'rejected_info':
          router.push('/gracias-info');
          break;
      }
    } catch (e) {
      console.error(e);
      setError('Hubo un error al enviar tu información. Inténtalo de nuevo.');
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="px-6 py-12 sm:px-10 sm:py-14">
        {/* Progress bar + step counter */}
        <div className="mb-10">
          <div className="h-1 bg-espresso-800/10 overflow-hidden mb-3">
            <div
              className="h-full bg-champagne-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs uppercase tracking-widest text-espresso-700/60">
            Paso {step + 1} de {TOTAL_STEPS}
          </p>
        </div>

        {/* BASIC INFO STEP */}
        {isBasicStep && (
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso-800 mb-3 leading-tight">
              Comencemos por lo básico
            </h2>
            <p className="text-espresso-700/70 mb-8">
              Tu información es 100% confidencial. No la compartimos con terceros.
            </p>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-espresso-800 mb-2"
                >
                  Nombre <span className="text-champagne-600">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input-c5"
                  value={basicData.firstName}
                  onChange={(e) =>
                    setBasicData({ ...basicData, firstName: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-espresso-800 mb-2"
                >
                  Apellido <span className="text-champagne-600">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input-c5"
                  value={basicData.lastName}
                  onChange={(e) =>
                    setBasicData({ ...basicData, lastName: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-espresso-800 mb-2"
                >
                  Teléfono (con código país){' '}
                  <span className="text-champagne-600">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  className="input-c5"
                  value={basicData.phone}
                  onChange={(e) =>
                    setBasicData({ ...basicData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-espresso-800 mb-2"
                >
                  Email <span className="text-champagne-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-c5"
                  value={basicData.email}
                  onChange={(e) =>
                    setBasicData({ ...basicData, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* QUESTION STEP */}
        {currentQuestion && (
          <div>
            {currentQuestion.intro && (
              <div className="mb-6 p-5 bg-sand-100 border-l-4 border-champagne-500">
                <p className="text-sm text-espresso-700 leading-relaxed">
                  {currentQuestion.intro}
                </p>
              </div>
            )}

            <h2 className="font-serif text-2xl sm:text-3xl text-espresso-800 leading-tight mb-8 text-balance">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const selected = currentAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      'w-full text-left flex items-start gap-4 p-4 sm:p-5 border bg-white transition-all duration-200',
                      selected
                        ? 'border-champagne-500 bg-sand-100 shadow-sm'
                        : 'border-espresso-800/15 hover:border-champagne-400 hover:bg-sand-100'
                    )}
                  >
                    <span
                      className={cn(
                        'flex-shrink-0 mt-0.5 h-5 w-5 rounded-full border-2 transition-all',
                        selected
                          ? 'border-champagne-500 bg-champagne-500'
                          : 'border-espresso-800/30'
                      )}
                    >
                      {selected && (
                        <span className="block h-1.5 w-1.5 m-auto mt-[5px] rounded-full bg-sand-50" />
                      )}
                    </span>
                    <span
                      className={cn(
                        'leading-relaxed',
                        selected
                          ? 'text-espresso-900 font-medium'
                          : 'text-espresso-700'
                      )}
                    >
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600 mt-6 text-center">{error}</p>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-espresso-800/10">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0 || submitting}
            className="flex items-center gap-2 text-xs text-espresso-700/70 hover:text-espresso-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Atrás
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canContinue || submitting}
            className="inline-flex items-center justify-center gap-2 bg-espresso-800 px-8 py-3.5 text-sm font-medium text-sand-50 transition-all duration-300 hover:bg-espresso-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : step === TOTAL_STEPS - 1 ? (
              <>
                Finalizar
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </>
            ) : (
              <>
                Siguiente
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
