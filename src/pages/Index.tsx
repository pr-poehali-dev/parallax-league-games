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
    { step: '01', title: 'Выбор формата', description: 'Подбираем игры и активности под ваше мероприятие' },
    { step: '02', title: 'Настройка площадки', description: 'Готовим физическое пространство и онлайн-трансляции' },
    { step: '03', title: 'Проведение', description: 'Координируем турниры в реальном времени' },
    { step: '04', title: 'Награждение', description: 'Подводим итоги с призами и церемонией' },
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '25 000 ₽',
      duration: 'До 20 участников',
      features: ['2 часа игрового времени', '3 дисциплины на выбор', 'Базовая трансляция', 'Призы победителям'],
      popular: false,
    },
    {
      name: 'Стандарт',
      price: '50 000 ₽',
      duration: 'До 50 участников',
      features: ['4 часа игрового времени', '5 дисциплин на выбор', 'HD трансляция + комментатор', 'Фотозона', 'Кейтеринг', 'Призовой фонд'],
      popular: true,
    },
    {
      name: 'Премиум',
      price: '100 000 ₽',
      duration: 'До 100 участников',
      features: ['Полный день', 'Неограниченные дисциплины', 'Профессиональная студия', 'VIP-зона', 'Шоу-программа', 'Эксклюзивные призы'],
      popular: false,
    },
  ];

  const gallery = [
    { color: 'from-purple-600 to-cyan-600', label: 'Арена' },
    { color: 'from-cyan-600 to-pink-600', label: 'Турнир' },
    { color: 'from-pink-600 to-purple-600', label: 'Награждение' },
    { color: 'from-purple-600 to-cyan-600', label: 'Трансляция' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/3d36baf2-96a5-47c4-94f3-1c64774985d6.jpg" 
              alt="Лига Игр" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              ЛИГА ИГР
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
          >
            Связаться
          </Button>
        </div>
      </nav>

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
            <div className="flex flex-col items-center gap-6 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/3d36baf2-96a5-47c4-94f3-1c64774985d6.jpg" 
                alt="Лига Игр" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
              <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                ЛИГА ИГР
              </h1>
            </div>
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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Как это работает
          </h2>
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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Галерея
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} hover-scale cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <p className="text-2xl font-bold">{item.label}</p>
                </div>
              </div>
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
                </CardHeader>
                <CardContent className="space-y-4">
                  {tariff.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Icon name="Check" className="text-cyan-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-cyan-300">Адрес</p>
                        <p className="text-gray-300">г. Пермь, ул. Игровая, 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-cyan-300">Телефон</p>
                        <p className="text-gray-300">+7 (342) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-cyan-300">Email</p>
                        <p className="text-gray-300">info@ligagames.ru</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-cyan-300">Режим работы</p>
                        <p className="text-gray-300">Ежедневно: 10:00 - 22:00</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-bold text-cyan-300">Соцсети</p>
                      <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'Twitter'].map((social, idx) => (
                          <Button
                            key={idx}
                            size="icon"
                            variant="outline"
                            className="border-cyan-500/50 hover:bg-cyan-500/20"
                          >
                            <Icon name="Share2" className="text-cyan-400" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-cyan-500/30">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-lg font-bold">
                    Записаться на консультацию
                    <Icon name="ArrowRight" className="ml-2" />
                  </Button>
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