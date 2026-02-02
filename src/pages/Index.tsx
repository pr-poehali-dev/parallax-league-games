import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const events = [
    { icon: 'Cake', title: 'Дни рождения', description: 'Незабываемый праздник с игровыми турнирами' },
    { icon: 'GraduationCap', title: 'Выпускные', description: 'Современный формат выпускного вечера' },
    { icon: 'Users', title: 'Корпоративы', description: 'Тимбилдинг через киберспортивные баттлы' },
    { icon: 'Trophy', title: 'Турниры', description: 'Профессиональные соревнования любого масштаба' },
  ];

  const steps = [
    { step: '01', title: 'Приглашения', description: 'Каждый игрок получает приглашение с полной информацией: где, когда и во сколько, чтобы никто не опоздал и нашёлся' },
    { step: '02', title: 'Встреча на площадке', description: 'Встречаем вас на современной Фиджитал площадке, располагаем верхнюю одежду и личные вещи по шкафчикам, проводим экскурсию по миру фиджитал соревнований' },
    { step: '03', title: 'Формирование команд', description: 'Делим игроков на команды для здорового духа соперничества' },
    { step: '04', title: 'Соревнования', description: 'Забираем игроков на локации и проводим с ними увлекательные соревнования в реальном и виртуальном мире' },
    { step: '05', title: 'Награждение', description: 'Подсчитываем количество набранных баллов и выдаём игровые награды, а также призы за участие' },
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '20 000 ₽',
      duration: 'До 15 участников',
      description: 'Идеальный старт в мир фиджитала для компании друзей или класса',
      time: '2 часа',
      format: '1 час реальных активностей + 1 час цифровых приключений',
      features: [
        'Физический блок «Вызов Кальмара» на стритбольной площадке',
        'Виртуальный блок «Миссия в Майнкрафте» на 15 игровых ПК',
        'Зона фудкорта для перекуса',
        'Работа игромастеров-ведущих',
        'Техническая организация (30 мин. на сбор гостей)'
      ],
      popular: false,
    },
    {
      name: 'Стандарт',
      price: '32 000 ₽',
      duration: 'До 20 участников',
      description: 'Масштабное приключение с разнообразием активностей и игровых платформ',
      time: '3 часа',
      format: 'Расширенная программа с двумя типами площадок',
      features: [
        'Физический блок «Большой квест» на целом стадионе',
        'Виртуальный блок «Битва вселенных»: Minecraft (18 ПК) + Fortnite (3 PlayStation)',
        'Праздничная зона для празднования',
        'Работа ведущих и технических специалистов',
        'Техническая организация (30 мин. на сбор гостей)'
      ],
      popular: true,
    },
    {
      name: 'Премиум',
      price: '70 000 ₽',
      duration: 'До 36 участников',
      description: 'Турнир уровня PRO с максимальным погружением и эксклюзивным форматом',
      time: '4 часа',
      format: 'Профессиональные соревнования в двух мирах с применением VR-технологий',
      features: [
        'Физический блок «Турнир «Клюшки-валенки» на стадионе',
        'Виртуальный блок в Fortnite: 18 ПК + 3 PlayStation + 2 VR-шлема',
        'Полная техническая и организационная поддержка',
        'Работа команды ведущих, технических специалистов и VR-ассистентов',
        'Призовой фонд для победителей (опционально)'
      ],
      popular: false,
    },
  ];

  const gallery = [
    { videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', label: 'Как проходят наши мероприятия' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 800,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-500/20 to-pink-600/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-fade-in leading-relaxed">
              ЛИГА ИГР
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Фиджитал мероприятия нового поколения
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Единственный в Перми формат, объединяющий физические и виртуальные соревнования
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-6 animate-scale-in"
              style={{ animationDelay: '0.6s' }}
            >
              Забронировать мероприятие
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-cyan-400" />
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-24 relative opacity-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 400) * 0.1}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              О формате
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-bold">Фиджитал</span> — это революционное объединение физических активностей с виртуальными соревнованиями.
              Мы создаём пространство, где реальные эмоции встречаются с цифровыми достижениями.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              От дней рождения до выпускных — каждое событие становится незабываемым турниром с профессиональной организацией,
              трансляциями и атмосферой настоящего киберспортивного шоу.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: 'Gamepad2', label: 'Киберспорт', value: '10+ игр' },
                { icon: 'Users', label: 'Участников', value: 'До 100' },
                { icon: 'Trophy', label: 'Призов', value: 'Гарантия' },
                { icon: 'Star', label: 'В Перми', value: 'Первые' },
              ].map((stat, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm hover-scale">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Icon name={stat.icon} size={32} className="mx-auto text-cyan-400" />
                    <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-24 relative opacity-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 800) * 0.15}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Типы мероприятий
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 backdrop-blur-sm hover-scale group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={event.icon} size={32} />
                  </div>
                  <CardTitle className="text-2xl text-cyan-300">{event.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base">{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 relative opacity-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 1200) * 0.1}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Как всё работает?
          </h2>
          <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
            Схема проведения мероприятия — от приглашения до награждения победителей
          </p>
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 space-y-2 pt-2">
                  <h3 className="text-3xl font-bold text-cyan-300">{step.title}</h3>
                  <p className="text-xl text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border-cyan-400/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-gray-300 text-lg mb-4">
                  Более подробно вы можете узнать по телефону:
                </p>
                <a 
                  href="tel:+79504602696" 
                  className="inline-flex items-center gap-3 text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Icon name="Phone" size={32} />
                  +7 (950) 460-26-96
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-24 relative opacity-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 1600) * 0.2}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Галерея
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            Смотрите, как проходят наши фиджитал-мероприятия
          </p>
          <div className="max-w-4xl mx-auto">
            {gallery.map((item, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 backdrop-blur-sm overflow-hidden hover-scale"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-cyan-300">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.videoUrl}
                      title={item.label}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="py-24 relative opacity-0"
        style={{
          transform: `translateY(${Math.max(0, scrollY - 2000) * 0.1}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  tariff.popular
                    ? 'bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border-cyan-400 scale-105'
                    : 'bg-slate-800/50 border-purple-500/30'
                } backdrop-blur-sm hover-scale`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-cyan-300">{tariff.name}</CardTitle>
                  <div className="py-6">
                    <p className="text-5xl font-bold text-white">{tariff.price}</p>
                    <p className="text-gray-400 mt-2">{tariff.duration}</p>
                  </div>
                  <CardDescription className="text-gray-300 text-base px-2">{tariff.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-gray-300"><span className="font-semibold text-purple-400">Хронометраж:</span> {tariff.time}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Zap" className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-gray-300"><span className="font-semibold text-cyan-400">Формат:</span> {tariff.format}</p>
                    </div>
                  </div>
                  <div className="border-t border-purple-500/30 pt-4 space-y-3">
                    {tariff.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                        <p className="text-sm text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[5] = el)}
        className="py-24 relative opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
              Контакты
            </h2>
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={40} className="text-cyan-400" />
                    <div>
                      <p className="text-lg text-gray-300 mb-2">Свяжитесь с нами</p>
                      <a 
                        href="tel:+79504602696" 
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all"
                      >
                        +7 (950) 460-26-96
                      </a>
                    </div>
                  </div>
                  <a href="tel:+79504602696" className="w-full">
                    <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-xl font-bold py-8">
                      <Icon name="Phone" className="mr-3" size={28} />
                      Позвонить сейчас
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Лига Игр. Фиджитал мероприятия в Перми.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;