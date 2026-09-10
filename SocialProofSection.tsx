import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Star, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';
import marianaImg from '../assets/images/testimonial_mariana.jpg';
import ruiImg from '../assets/images/testimonial_rui.jpg';
import beatrizImg from '../assets/images/testimonial_beatriz.jpg';
import marianaAudio from '../assets/audio/testimonial_mariana.mp3';
import ruiAudio from '../assets/audio/testimonial_rui.mp3';
import beatrizAudio from '../assets/audio/testimonial_beatriz.mp3';

const formatTime = (seconds: number) => {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export const SocialProofSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      id: 'mariana-lisboa',
      name: 'Mariana S.',
      location: 'Lisboa',
      cityFlag: '🇵🇹',
      role: 'Aluna Forno d\'Ouro',
      quote:
        'Eu odiava bolos sem glúten porque pareciam borracha ou desfaziam-se todos. Com a técnica SHA, o bolo de laranja fica incrivelmente húmido por 4 dias!',
      cakeMentioned: 'Bolo de Laranja e Amêndoa SHA',
      duration: '0:28',
      avatarImg: marianaImg,
      audioSrc: marianaAudio,
    },
    {
      id: 'rui-porto',
      name: 'Rui M.',
      location: 'Porto',
      cityFlag: '🇵🇹',
      role: 'Aluno Forno d\'Ouro',
      quote:
        'Sujar a batedeira para fazer bolos ao domingo era uma chatice. Agora misturo tudo numa taça com a vara de arames em 5 minutos. Rápido, limpo e delicioso.',
      cakeMentioned: 'Técnica da Taça Única',
      duration: '0:34',
      avatarImg: ruiImg,
      audioSrc: ruiAudio,
    },
    {
      id: 'beatriz-braga',
      name: 'Beatriz F.',
      location: 'Braga',
      cityFlag: '🇵🇹',
      role: 'Mãe & Aluna Forno d\'Ouro',
      quote:
        'O meu filho tem intolerância aos laticínios e finalmente posso fazer-lhe um bolo de chocolate fofinho que ele adora.',
      cakeMentioned: 'Bolo de Cacau com Fudge Sem Lactose',
      duration: '0:31',
      avatarImg: beatrizImg,
      audioSrc: beatrizAudio,
    },
  ];

  const toggleAudio = (id: string, src: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
      return;
    }

    audio.src = src;
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);
    audio.play().catch(() => {});
    setPlayingId(id);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FCFCFA] border-y border-neutral-200/70" id="testemunhos">
      <div className="safe-zone-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Experiências Reais em Portugal
          </div>
          
          <h2 className="headline-heavy text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
            Feedback de quem já come bolos saudáveis com prazer:
          </h2>

          {/* Interactive Audio Callout */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs sm:text-sm font-semibold shadow-xs">
            <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="tracking-wide">CLIQUE PARA ASSISTIR COM ÁUDIO</span>
          </div>
        </div>

        {/* Carousel Drag / Scroll Hint */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-4 px-2">
          <div className="text-xs sm:text-sm text-neutral-500 font-medium">
            ← Arraste para o lado para ver mais →
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Ver testemunho anterior"
              className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Ver próximo testemunho"
              className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider / Grid */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none max-w-5xl mx-auto"
        >
          {testimonials.map((t) => {
            const isThisPlaying = playingId === t.id;
            return (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className="min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-center bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta: Stars and Location */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 font-semibold bg-neutral-100 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span>{t.location}</span>
                      <span>{t.cityFlag}</span>
                    </div>
                  </div>

                  {/* Exact Quote */}
                  <blockquote className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div>
                  {/* Audio Player Component */}
                  <div
                    onClick={() => toggleAudio(t.id, t.audioSrc)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all mb-5 ${
                      isThisPlaying
                        ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                        : 'bg-neutral-50 border-neutral-200/80 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          aria-label={isThisPlaying ? 'Pausar áudio' : 'Ouvir depoimento em áudio'}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors ${
                            isThisPlaying ? 'bg-emerald-600' : 'bg-neutral-900'
                          }`}
                        >
                          {isThisPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-white" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          )}
                        </button>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#1A1A1A]">
                            {isThisPlaying ? 'A reproduzir relato...' : 'Ouvir áudio gravado'}
                          </span>
                          <span className="text-[10px] text-neutral-500">
                            {isThisPlaying
                              ? `${formatTime(currentTime)} / ${duration ? formatTime(duration) : t.duration}`
                              : `Áudio • ${t.duration}`}
                          </span>
                        </div>
                      </div>

                      {/* Equalizer bars */}
                      <div className="flex items-end gap-0.5 h-4">
                        <div
                          className={`w-1 bg-emerald-500 rounded-full transition-all ${
                            isThisPlaying ? 'h-4 animate-pulse' : 'h-1.5'
                          }`}
                        />
                        <div
                          className={`w-1 bg-emerald-500 rounded-full transition-all ${
                            isThisPlaying ? 'h-3 animate-bounce' : 'h-2.5'
                          }`}
                        />
                        <div
                          className={`w-1 bg-emerald-500 rounded-full transition-all ${
                            isThisPlaying ? 'h-4 animate-pulse' : 'h-1.5'
                          }`}
                        />
                        <div
                          className={`w-1 bg-emerald-500 rounded-full transition-all ${
                            isThisPlaying ? 'h-2 animate-bounce' : 'h-3'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Progress line */}
                    {isThisPlaying && (
                      <div className="w-full bg-neutral-200 h-1 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-emerald-600 h-full transition-all duration-300"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover shadow-xs"
                    />
                    <div className="flex flex-col">
                      <span className="headline-apple text-sm text-[#1A1A1A] font-bold">
                        {t.name}, {t.location}.
                      </span>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => {
            setPlayingId(null);
            setCurrentTime(0);
          }}
          className="hidden"
        />

      </div>
    </section>
  );
};
