import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const LOGO_IMG = 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/3e3201fa-2c61-4bd1-b56d-018fe8f2af80.jpeg';
const HERO_IMG = 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/7b350b2a-e80e-4318-9d30-71d7dfbc5b70.jpeg';
const INTERIOR_1 = 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/2905ddae-34e4-45fa-86c9-d57aceb0ad47.jpeg';
const EXTERIOR_NIGHT = 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/a730ec56-8fe6-4b6d-bce2-700e4b600aa6.jpeg';
const EXTERIOR_DAY = 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/fd2ed102-e3a3-4558-9e60-ef91c47cb0ed.jpeg';

const gallery = [
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/9aa3e35b-8f0e-4aaa-89e6-3c518597ef48.jpeg', label: 'Фейд + укладка' },
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/731c2ada-4908-46e4-90e7-2f9012e9f54f.jpeg', label: 'Камуфляж седины' },
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/8f2ef570-b9ff-482f-bd84-3e91de3c4213.jpeg', label: 'Классика' },
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/e178d934-4c3c-4de0-9a25-338874b7cd00.jpeg', label: 'Низкий фейд' },
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/7b350b2a-e80e-4318-9d30-71d7dfbc5b70.jpeg', label: 'Интерьер' },
  { src: 'https://cdn.poehali.dev/projects/68577908-3c1d-4650-a2f9-8cffcc0f0be8/bucket/2905ddae-34e4-45fa-86c9-d57aceb0ad47.jpeg', label: 'Рабочие места' },
];

const nav = [
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const services = [
  { name: 'Мужская стрижка', desc: 'Классика или модный фейд под форму головы', price: '2 000 ₽', icon: 'Scissors' },
  { name: 'Стрижка бороды', desc: 'Моделирование, окантовка и уход', price: '1 200 ₽', icon: 'User' },
  { name: 'Королевское бритьё', desc: 'Опасная бритва, горячее полотенце', price: '1 800 ₽', icon: 'Sparkles' },
  { name: 'Камуфляж седины', desc: 'Естественный тон без эффекта краски', price: '1 500 ₽', icon: 'Droplet' },
  { name: 'Отец + сын', desc: 'Две стрижки в четыре руки', price: '3 200 ₽', icon: 'Users' },
  { name: 'Стайлинг и укладка', desc: 'Подбор укладки и продукта под вас', price: '800 ₽', icon: 'Wind' },
];



const reviews = [
  { name: 'Артём К.', text: 'Лучший фейд в городе. Чисто, спокойно, без лишних разговоров — то, что нужно.', rate: 5 },
  { name: 'Дмитрий В.', text: 'Хожу полгода. Каждый раз одинаково ровно. Атмосфера минимализма цепляет.', rate: 5 },
  { name: 'Сергей М.', text: 'Бритьё опасной бритвой — отдельный ритуал. Вышел другим человеком.', rate: 5 },
];

const Index = () => {
  const [menu, setMenu] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('top')} className="flex items-center">
            <img src={LOGO_IMG} alt="КласикО барбершоп" className="h-10 w-auto object-contain" />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="font-display uppercase text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('booking')} className="rounded-none font-display uppercase tracking-widest bg-accent text-accent-foreground hover:bg-accent/90">
              Запись
            </Button>
          </nav>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <Icon name={menu ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="block w-full text-left px-6 py-4 font-display uppercase tracking-widest text-sm border-b border-border">
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo('booking')}
              className="block w-full text-left px-6 py-4 font-display uppercase tracking-widest text-sm text-accent">
              Записаться
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end pb-20 pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Интерьер КласикО" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="container relative z-10 animate-fade-in">
          <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-6">Барбершоп · с 2014 года</p>
          <h1 className="font-display font-600 uppercase leading-[0.9] text-6xl md:text-9xl tracking-tight mb-8 text-white">
            Класси<br />ческий<br /><span className="text-accent">стиль</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md mb-10 text-balance">
            Чистая эстетика и точные линии. Никакой суеты — только вы, мастер и идеальная стрижка.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollTo('booking')} size="lg"
              className="rounded-none font-display uppercase tracking-widest bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10">
              Записаться
            </Button>
            <Button onClick={() => scrollTo('services')} size="lg"
              className="rounded-none font-display uppercase tracking-widest bg-transparent border border-white text-white hover:bg-white hover:text-foreground h-14 px-10">
              Услуги
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 bg-accent text-accent-foreground p-5 hidden md:block">
          <p className="font-display text-4xl font-700 leading-none">4.9</p>
          <p className="text-xs uppercase tracking-widest mt-1">2 400+ отзывов</p>
        </div>
      </section>

      {/* О НАС */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={EXTERIOR_DAY} alt="Вход в барбершоп" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <img src={EXTERIOR_NIGHT} alt="Барбершоп ночью" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="md:pl-8">
            <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Наше место</p>
            <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight mb-8">О нас</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              КласикО — мужской барбершоп с атмосферой настоящего мужского клуба. Стильный интерьер, профессиональные мастера и внимание к каждой детали.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Мы работаем только с проверенными инструментами и профессиональной косметикой. Каждый клиент уходит с идеальным результатом.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { num: '10+', label: 'лет опыта' },
                { num: '5 000+', label: 'довольных клиентов' },
                { num: '3', label: 'мастера' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-600 text-accent">{s.num}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Прайс</p>
              <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight">Услуги</h2>
            </div>
            <p className="text-muted-foreground max-w-xs">Фиксированные цены без скрытых доплат. Уход в подарок к каждой стрижке.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <div key={s.name} className="bg-background p-8 group hover:bg-foreground hover:text-background transition-colors duration-300">
                <Icon name={s.icon} size={32} className="text-accent mb-6" />
                <div className="flex items-baseline justify-between mb-3 gap-4">
                  <h3 className="font-display uppercase text-xl tracking-wide">{s.name}</h3>
                  <span className="font-display text-lg whitespace-nowrap">{s.price}</span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-secondary border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Наши работы</p>
            <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <div key={i} className="relative overflow-hidden aspect-[3/4] group">
                <img src={item.src} alt={item.label}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                  <span className="text-background font-display uppercase tracking-widest text-xs p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Что говорят</p>
            <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight">Отзывы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="border border-border p-8 hover:border-accent transition-colors">
                <div className="flex gap-1 mb-6 text-accent">
                  {Array.from({ length: r.rate }).map((_, i) => <Icon key={i} name="Star" size={16} className="fill-accent" />)}
                </div>
                <p className="text-foreground mb-8 leading-relaxed">«{r.text}»</p>
                <p className="font-display uppercase tracking-widest text-sm text-muted-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS + MAP */}
      <section id="contacts" className="py-24 md:py-32 bg-foreground text-background border-t border-border">
        <div className="container grid md:grid-cols-2 gap-12 items-stretch">
          <div>
            <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Как нас найти</p>
            <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight mb-10">Контакты</h2>
            <div className="space-y-6">
              {[
                { icon: 'MapPin', t: 'Адрес', v: 'Москва, ул. Большая Никитская, 12' },
                { icon: 'Clock', t: 'Часы работы', v: 'Ежедневно с 10:00 до 22:00' },
                { icon: 'Phone', t: 'Телефон', v: '+7 (495) 123-45-67' },
                { icon: 'Mail', t: 'Почта', v: 'hello@forma.ru' },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4">
                  <Icon name={c.icon} size={22} className="text-accent mt-1" />
                  <div>
                    <p className="font-display uppercase text-xs tracking-widest text-background/50 mb-1">{c.t}</p>
                    <p className="text-lg">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[360px] grayscale contrast-125">
            <iframe
              title="Карта барбершопа FORMA"
              src="https://yandex.ru/map-widget/v1/?ll=37.601%2C55.756&z=16&pt=37.601,55.756,pm2rdm"
              width="100%" height="100%" frameBorder="0"
              className="w-full h-full min-h-[360px] border border-background/20"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 md:py-32 border-t border-border bg-secondary">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-display uppercase tracking-[0.4em] text-accent text-sm mb-4">Онлайн</p>
            <h2 className="font-display font-600 uppercase text-5xl md:text-6xl tracking-tight">Запись</h2>
          </div>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Ваше имя" className="bg-background border border-border px-5 h-14 outline-none focus:border-accent transition-colors" />
            <input placeholder="Телефон" className="bg-background border border-border px-5 h-14 outline-none focus:border-accent transition-colors" />
            <div className="grid sm:grid-cols-2 gap-4">
              <select className="bg-background border border-border px-5 h-14 outline-none focus:border-accent transition-colors text-muted-foreground">
                <option>Выберите услугу</option>
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
              <input type="date" className="bg-background border border-border px-5 h-14 outline-none focus:border-accent transition-colors text-muted-foreground" />
            </div>
            <Button type="submit" size="lg"
              className="rounded-none font-display uppercase tracking-widest bg-accent text-accent-foreground hover:bg-accent/90 h-14 mt-2">
              Записаться
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/60 py-12 border-t border-background/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={LOGO_IMG} alt="КласикО" className="h-10 w-auto object-contain brightness-0 invert" />
          <p className="text-sm">© 2026 Барбершоп «КласикО». Все права защищены.</p>
          <div className="flex gap-5">
            {['Instagram', 'Send', 'Youtube'].map((s) => (
              <button key={s} className="hover:text-accent transition-colors"><Icon name={s} size={20} /></button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;