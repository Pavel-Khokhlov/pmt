import { e as createAstro, f as createComponent, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderScript, o as renderComponent, s as spreadAttributes } from '../chunks/astro/server_DArtB3Sg.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://pavel-khokhlov.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Профессиональный массаж</title>${renderHead()}</head> <body class="body"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/macbook/dev/MY/massage-astro/src/layouts/Layout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://pavel-khokhlov.github.io");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="scroll" data-astro-cid-5fp3zggb></div>  <script>\n  // \u0422\u0438\u043F \u0434\u043B\u044F TypeScript (\u0435\u0441\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F)\n  /** @type {HTMLElement & { style: CSSStyleDeclaration }} */\n  let ScrollElement;\n\n  let scrollWidth = 0;\n\n  const handleScroll = () => {\n    const scrollHeight = Math.max(\n      document.body.scrollHeight,\n      document.documentElement.scrollHeight,\n      document.body.offsetHeight,\n      document.documentElement.offsetHeight,\n      document.body.clientHeight,\n      document.documentElement.clientHeight\n    );\n\n    const maxScrollableHeight = scrollHeight - window.innerHeight;\n    if (maxScrollableHeight <= 0) return;\n\n    const scrollY = window.scrollY || window.pageYOffset;\n    const position = (scrollY / maxScrollableHeight) * 100;\n    scrollWidth = position;\n\n    const scrollElement = document.querySelector(".scroll");\n    if (scrollElement) {\n      scrollElement.style.width = `${scrollWidth}vw`;\n    }\n  };\n\n  // \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\n  document.addEventListener("DOMContentLoaded", () => {\n    handleScroll();\n    window.addEventListener("scroll", handleScroll);\n  });\n\n  // \u0414\u043B\u044F Astro SPA-\u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438\n  document.addEventListener("astro:after-swap", () => {\n    window.addEventListener("scroll", handleScroll);\n  });\n<\/script>'], ["", '<div class="scroll" data-astro-cid-5fp3zggb></div>  <script>\n  // \u0422\u0438\u043F \u0434\u043B\u044F TypeScript (\u0435\u0441\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F)\n  /** @type {HTMLElement & { style: CSSStyleDeclaration }} */\n  let ScrollElement;\n\n  let scrollWidth = 0;\n\n  const handleScroll = () => {\n    const scrollHeight = Math.max(\n      document.body.scrollHeight,\n      document.documentElement.scrollHeight,\n      document.body.offsetHeight,\n      document.documentElement.offsetHeight,\n      document.body.clientHeight,\n      document.documentElement.clientHeight\n    );\n\n    const maxScrollableHeight = scrollHeight - window.innerHeight;\n    if (maxScrollableHeight <= 0) return;\n\n    const scrollY = window.scrollY || window.pageYOffset;\n    const position = (scrollY / maxScrollableHeight) * 100;\n    scrollWidth = position;\n\n    const scrollElement = document.querySelector(".scroll");\n    if (scrollElement) {\n      scrollElement.style.width = \\`\\${scrollWidth}vw\\`;\n    }\n  };\n\n  // \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\n  document.addEventListener("DOMContentLoaded", () => {\n    handleScroll();\n    window.addEventListener("scroll", handleScroll);\n  });\n\n  // \u0414\u043B\u044F Astro SPA-\u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438\n  document.addEventListener("astro:after-swap", () => {\n    window.addEventListener("scroll", handleScroll);\n  });\n<\/script>'])), maybeRenderHead());
}, "/Users/macbook/dev/MY/massage-astro/src/components/elements/ScrollIndicator.astro", void 0);

const menuLinks = [
  { id: "911356", title: "Главная", path: "#main" },
  { id: "911361", title: "Обо мне", path: "#about" },
  { id: "911400", title: "Услуги", path: "#service" },
  { id: "911362", title: "Отзывы", path: "#feedbacks" },
  { id: "911364", title: "Вопрос-Ответ", path: "#faq" },
  { id: "911363", title: "Написать мне", path: "#contacts" },
];

const $$Astro$2 = createAstro("https://pavel-khokhlov.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { location = "_modal" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`nav ${location}`, "class")} data-astro-cid-tnmijx3z> <ul${addAttribute(`nav__list ${location}`, "class")} data-astro-cid-tnmijx3z> ${menuLinks.map((link) => renderTemplate`<li data-astro-cid-tnmijx3z> <a${addAttribute(link.path, "id")}${addAttribute(typeof link.path === "object" ? "#service" : link.path, "href")}${addAttribute(`nav__link ${location}`, "class")} data-astro-cid-tnmijx3z> ${link.title} </a> </li>`)} </ul> </nav> <!-- Script --> ${renderScript($$result, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Navigation.astro?astro&type=script&index=0&lang.ts")} <!-- Styles --> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" id="header"> <div class="header__wrapper"> ${renderComponent($$result, "ScrollIndicator", $$ScrollIndicator, {})} <h2 class="header__logo">П</h2> ${renderComponent($$result, "Navigation", $$Navigation, { ":isOpen": "true", "location": "_header" })} <div class="burger" data-action="burger" data-a="click,menu,hamburger"></div> </div> <div class="burger-menu"> ${renderComponent($$result, "Navigation", $$Navigation, { "id": "burger-nav", "location": "_modal" })} </div> </header> ${renderScript($$result, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Header.astro", void 0);

const $$Astro$1 = createAstro("https://pavel-khokhlov.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`button ${type && `button__${type}`}`, "class")}${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/elements/Button.astro", void 0);

const $$First = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section _first" id="main"> <aside class="main"> ${renderComponent($$result, "Button", $$Button, { "type": "main" }, { "default": ($$result2) => renderTemplate`${"\u041C\u0430\u0441\u0441\u0430\u0436"}` })} ${renderComponent($$result, "Button", $$Button, { "type": "main" }, { "default": ($$result2) => renderTemplate`${"\u041A\u0438\u043D\u0435\u0437\u0438\u043E\u0442\u0435\u0439\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"}` })} ${renderComponent($$result, "Button", $$Button, { "type": "main" }, { "default": ($$result2) => renderTemplate`${"\u0413\u0432\u043E\u0437\u0434\u0435\u0441\u0442\u043E\u044F\u043D\u0438\u0435"}` })} </aside> </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/First.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section _about" id="about" data-astro-cid-zsov6f23> <h2 class="section__title _black" data-astro-cid-zsov6f23>Обо мне</h2> <!-- <diplomas-carousel :slides="diplomas" /> --> <div class="about__top" data-astro-cid-zsov6f23> <img src="../assets/images/background/portrait.webp" class="about__portrait" data-astro-cid-zsov6f23> <p class="about__me" data-astro-cid-zsov6f23>
Меня зовут Павел, профессионально занимаюсь массажем с 2016 года. Массаж
      для меня в первую очередь это здоровье, красота и отличное настроение.
      Все эти годы изучал и практиковал различные техники массажа и
      остановился на самых эффективных. Для быстрой коррекции тела конечно же
      самый лучший инструмент это "Правило". Он помогает в максимально
      короткий срок привести наш организм в симметрию и укрепить физическое
      состояние наших мышц. Работает как в глубоких слоях наших мышц, так и
      отлично справляется с проблемами суставов и сухожилий. Конечно же сейчас
      трудно представить массаж без миофасциальных техник. Фасции - как мягкий
      скелет нашего организма. Они должны быть эластичными и способными
      пропускать свободно наш лимфоток. На своих процедурах активно использую
      техники вибрационно-звукового массажа, который в максимально короткий
      срок запустить кровоток и лимфоток в вашем теле и подготовить организм к
      более глубоким нагрузкам. Не могу сейчас представить свою жизнь без
      гвоздестояния. Гвозди "Садху" помогают расслабить эмоциональное и
      психическое состояние, что особенно важно при больших стрессовых
      нагрузках, которые мы испытываем в современном мире. Но самый важный
      момент, это же конечно обратная связь от моих любимых клиентов.
      Некоторые из них уже со мной на протяжении нескольких лет и это для меня
      самый важный момент в работе, значит они в меня верят и ценят мой труд.
</p> </div> </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/About.astro", void 0);

const certificate$1 = new Proxy({"src":"/pmt/_astro/certificate.C5u8wvgI.webp","width":1000,"height":741,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/certificate.webp";
							}
							
							return target[name];
						}
					});

const pravilo$1 = new Proxy({"src":"/pmt/_astro/pravilo.DCRbV3UK.webp","width":959,"height":683,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/pravilo.webp";
							}
							
							return target[name];
						}
					});

const trigger$1 = new Proxy({"src":"/pmt/_astro/trigger.N7hgno6S.webp","width":1000,"height":773,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/trigger.webp";
							}
							
							return target[name];
						}
					});

const kinezio$1 = new Proxy({"src":"/pmt/_astro/kinezio.r31LTkh6.webp","width":1000,"height":717,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/kinezio.webp";
							}
							
							return target[name];
						}
					});

const veniki$1 = new Proxy({"src":"/pmt/_astro/veniki.BLeCDX7r.webp","width":665,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/veniki.webp";
							}
							
							return target[name];
						}
					});

const perkucia$1 = new Proxy({"src":"/pmt/_astro/perkucia.D9gRuwOe.webp","width":714,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/perkucia.webp";
							}
							
							return target[name];
						}
					});

const $$CertificateModal = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { id: 1, src: certificate$1.src, alt: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442" },
    { id: 2, src: kinezio$1.src, alt: "\u0414\u0438\u043F\u043B\u043E\u043C \u043F\u043E \u043A\u0438\u043D\u0435\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0438" },
    { id: 3, src: pravilo$1.src, alt: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E" },
    { id: 4, src: trigger$1.src, alt: "\u0422\u0440\u0438\u0433\u0433\u0435\u0440\u043D\u0430\u044F \u0442\u0435\u0440\u0430\u043F\u0438\u044F" },
    { id: 5, src: veniki$1.src, alt: "\u0412\u0435\u043D\u0438\u043A\u0438" },
    { id: 6, src: perkucia$1.src, alt: "\u041F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="modal-slider" class="modal"> <div class="modal__overlay"></div> <div class="modal__content"> <button class="modal__close">&times;</button> <div class="slider"> <div class="slider__container"> ${slides.map((slide, index) => renderTemplate`<div class="slider__slide"${addAttribute(slide.id, "data-slide-index")}> <img${addAttribute(slide.src, "src")}${addAttribute(slide.alt, "alt")} class="slider__image"> </div>`)} </div> </div> <div class="slider__indicators"> <button class="slider__nav slider__nav--prev">&larr;</button> ${slides.map((slide, index) => renderTemplate`<button${addAttribute(`slider__indicator ${index === 0 ? "active" : ""}`, "class")}${addAttribute(index, "data-slide-index")}></button>`)} <button class="slider__nav slider__nav--next">&rarr;</button> </div> </div> </div> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/elements/CertificateModal.astro", void 0);

const certificate = new Proxy({"src":"/pmt/_astro/certificate.ZtZerHwZ.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/certificate.webp";
							}
							
							return target[name];
						}
					});

const pravilo = new Proxy({"src":"/pmt/_astro/pravilo.DZdLgDKR.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/pravilo.webp";
							}
							
							return target[name];
						}
					});

const trigger = new Proxy({"src":"/pmt/_astro/trigger.qXWMZ1l9.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/trigger.webp";
							}
							
							return target[name];
						}
					});

const kinezio = new Proxy({"src":"/pmt/_astro/kinezio.Dj2epsOV.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/kinezio.webp";
							}
							
							return target[name];
						}
					});

const veniki = new Proxy({"src":"/pmt/_astro/veniki.szsDIQKm.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/veniki.webp";
							}
							
							return target[name];
						}
					});

const perkucia = new Proxy({"src":"/pmt/_astro/perkucia.CLCxnVwt.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbook/dev/MY/massage-astro/src/assets/images/diplomas/thumb/perkucia.webp";
							}
							
							return target[name];
						}
					});

const $$Certificates = createComponent(($$result, $$props, $$slots) => {
  const diplomas = [
    { id: 1, src: certificate.src, alt: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442" },
    { id: 2, src: kinezio.src, alt: "\u0414\u0438\u043F\u043B\u043E\u043C \u043F\u043E \u043A\u0438\u043D\u0435\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0438" },
    { id: 3, src: pravilo.src, alt: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E" },
    { id: 4, src: trigger.src, alt: "\u0422\u0440\u0438\u0433\u0433\u0435\u0440\u043D\u0430\u044F \u0442\u0435\u0440\u0430\u043F\u0438\u044F" },
    { id: 5, src: veniki.src, alt: "\u0412\u0435\u043D\u0438\u043A\u0438" },
    { id: 6, src: perkucia.src, alt: "\u041F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section _certificates" data-astro-cid-py6yiie3> ${diplomas.map((d, index) => {
    return renderTemplate`<button${addAttribute(String(d.id), "id")} class="diploma"${addAttribute(d.alt, "name")}${addAttribute(
      d.src ? {
        backgroundImage: `url(${d.src})`
      } : {},
      "style"
    )} data-astro-cid-py6yiie3></button>`;
  })} </section> ${renderComponent($$result, "CertificateModal", $$CertificateModal, { "data-astro-cid-py6yiie3": true })} ${renderScript($$result, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Certificates.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Certificates.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://pavel-khokhlov.github.io");
const $$FeedbackCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeedbackCarousel;
  const { slides } = Astro2.props;
  const imagesModule = await import('../chunks/index_B9MXDrXV.mjs');
  const images = imagesModule.default || imagesModule;
  const getAvatarImage = (avatarKey) => {
    return images[avatarKey] || null;
  };
  return renderTemplate(_a || (_a = __template(["", '<div class="carousel" data-astro-cid-sqbevqhu> <div class="carousel__track" id="carouselTrack" data-astro-cid-sqbevqhu> ', ' </div> <!-- \u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u044B --> <div class="carousel__indicators" data-astro-cid-sqbevqhu> ', ' </div> </div> <script>\n  // \u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438\n  window.scrollToCenter = function (index) {\n    const track = document.getElementById("carouselTrack");\n    const items = track.querySelectorAll(".carousel__item");\n    const item = items[index];\n\n    if (!item) return;\n\n    const itemLeft = item.offsetLeft;\n    const containerWidth = track.offsetWidth;\n    const itemWidth = item.offsetWidth;\n\n    // \u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430\n    const scrollPosition = itemLeft - (containerWidth - itemWidth) / 2;\n\n    track.scrollTo({\n      left: scrollPosition,\n      behavior: "smooth",\n    });\n\n    updateIndicators(index);\n  };\n\n  function updateIndicators(activeIndex) {\n    const indicators = document.querySelectorAll(".carousel__dot");\n    indicators.forEach((indicator, index) => {\n      indicator.classList.toggle("_active", index === activeIndex);\n    });\n  }\n\n  // \u0410\u0432\u0442\u043E\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u043B\u0430\u0439\u0434\u0430 \u043F\u0440\u0438 \u0441\u043A\u0440\u043E\u043B\u043B\u0435\n  document.addEventListener("DOMContentLoaded", () => {\n    const track = document.getElementById("carouselTrack");\n    const items = track.querySelectorAll(".carousel__item");\n    const indicators = document.querySelectorAll(".carousel__dot");\n\n    // \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u044B\n    indicators.forEach((indicator, index) => {\n      indicator.addEventListener("click", () => {\n        scrollToCenter(index);\n      });\n    });\n\n    // \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u0431\u043B\u043E\u043A\u0438\n    items.forEach((item, index) => {\n      item.addEventListener("click", () => {\n        scrollToCenter(index);\n      });\n    });\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        let mostVisibleIndex = 0;\n        let maxVisibility = 0;\n\n        items.forEach((item, index) => {\n          const rect = item.getBoundingClientRect();\n          const trackRect = track.getBoundingClientRect();\n\n          // \u0412\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u043C \u0432\u0438\u0434\u0438\u043C\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C\n          const visibleWidth =\n            Math.min(rect.right, trackRect.right) -\n            Math.max(rect.left, trackRect.left);\n          const visibleRatio = visibleWidth / rect.width;\n\n          if (visibleRatio > maxVisibility) {\n            maxVisibility = visibleRatio;\n            mostVisibleIndex = index;\n          }\n        });\n\n        updateIndicators(mostVisibleIndex);\n      },\n      {\n        root: track,\n        threshold: [0.1, 0.5, 0.9],\n      }\n    );\n\n    items.forEach((item) => observer.observe(item));\n  });\n<\/script>  '])), maybeRenderHead(), slides.map((slide, index) => {
    const avatarImage = getAvatarImage(slide.avatar);
    return renderTemplate`<div class="carousel__item"${addAttribute(index, "data-index")} data-astro-cid-sqbevqhu> ${avatarImage ? renderTemplate`<img${addAttribute(`\u0410\u0432\u0430\u0442\u0430\u0440 ${slide.name}`, "alt")} class="carousel__avatar"${addAttribute(avatarImage.src, "src")}${addAttribute(100, "width")}${addAttribute(100, "height")} loading="lazy" data-astro-cid-sqbevqhu>` : renderTemplate`<div class="carousel__avatar-placeholder" data-astro-cid-sqbevqhu> ${slide.name.charAt(0)} </div>`} <h3 class="carousel__title" data-astro-cid-sqbevqhu>${slide.name}</h3> <p class="carousel__text" data-astro-cid-sqbevqhu>${slide.feedback}</p> ${slide.contact && renderTemplate`<p class="carousel__contact" data-astro-cid-sqbevqhu>${slide.contact}</p>`} </div>`;
  }), slides.map((_, index) => renderTemplate`<button class="carousel__dot"${addAttribute(index, "data-index")}${addAttribute(`\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0430\u0439\u0434\u0443 ${index + 1}`, "aria-label")} data-astro-cid-sqbevqhu></button>`));
}, "/Users/macbook/dev/MY/massage-astro/src/components/elements/FeedbackCarousel.astro", void 0);

const feedbacks = [
  {
    id: 0,
    avatar: 'kseniya',
    name: 'Ксения',
    feedback:
      'Попробовала впервые, ощущения только положительные. Слышала, что данная техника использовалась ещё нашими предками. Гениальный и простой тренажёр. Растяжка мышц потрясающая. На следующий день приятная лёгкость во всем теле. Особая благодарность инструктору. Грамотный и внимательный подход индивидуально к каждому. Тренировка на одном дыхании. Возможности Правило огромные как для меня новичка, так и для продвинутых. Мои рекомендации всем и бодрое настроение.',
    contact: '@Ksy_Gri'
  },
  {
    id: 1,
    avatar: 'anna_klubnikina',
    name: 'Анна',
    feedback:
      'Волшебные руки Павла помогают от всего! Моя спина теперь в порядке, а значит и голова :) Отдельная тема - кинезиотейпирование. Лимфодренажный эффект заметен сразу, что при сидячей работе просто спасает. Ну, и конечно, похудение. Когда я выхожу после сеанса, мне кажется я сбросила килограммов 5 и просто парю над землей! Спасибо, Павел!',
    contact: '@anna_klubnikina'
  },
  {
    id: 2,
    avatar: 'tatiana',
    name: ' Татьяна',
    feedback:
      'К Павлу хожу на массаж около года. Делаем лимфо дренажный, но каждый раз новая методика. После массажа всегда прекрасное настроение, чувство лёгкости, ощущение мышц, на утро лёгкий подъём и прилив энергии. Если анализировать работу других массажистов, то у них как будто просто поглаживание. Поэтому рекомендую только к Павлу!',
    contact: '@tatia_ch7'
  },
  {
    id: 3,
    avatar: 'ts_andreeva',
    name: 'Татьяна',
    feedback:
      'Павел - массажист от Бога! Очень внимательно относится к запросу клиентов. Детально прорабатывает проблемные зоны. Очень понравился и общий массаж, и антицеллюлитный. Для антицеллюлитного подбирает уникальные средства. Всегда в отличном настроении и с юмором - мне нравится такой подход! Всем рекомендую!',
    contact: '@TS_Andreeva'
  },
  {
    id: 4,
    avatar: 'kristina',
    name: 'Кристина',
    feedback:
      'Хочу выразить огромную благодарность Павлу, за то, что помогает мне избавиться от болей в спине. Я по профессии мастер маникюра и педикюра, и спина страдает очень сильно. После массажа у Павла, любая боль снимается, как по волшебству. Не хватит всех слов, чтоб выразить мою благодарность его профессионализму.',
    contact: '@KrisKim87'
  },
  {
    id: 5,
    avatar: 'diana',
    name: 'Диана',
    feedback:
      'Прихожу к Павлу на массаж уже не в первый раз. Все как всегда на высшем уровне: качественный массаж, после которого хочется летать, приятная, комфортная обстановка, расслабляющая музыка. Внимательный, очень тактичный специалист с доброй энергетикой.',
    contact: '@mrs_Diana_M'
  },
  {
    id: 6,
    avatar: 'irina',
    name: 'Ирина',
    feedback:
      'Проблемы со спиной и шеей всегда, на курсы массажа хожу 2-3 раза в год, поэтому оценить качество данной процедуры могу. Павел - профессионал! Если есть проблемы - записывайтесь, приходите на массаж, не пожалеете. Золотые руки! Да это про данного мастера!',
    contact: '@PO4EMY4E4KA'
  },
  {
    id: 7,
    avatar: 'nine',
    name: 'Анна',
    feedback:
      'От сидячей работы очень начала болеть спина, а особенно плечи. Пришла на пробный массаж, и после сеанса сразу поняла, что Павел сделает с моими плечами то, что надо. Павел очень хорошо чувствует проблемные зоны и прорабатывает те точки, которые необходимы. Техника очень хорошая и сильные руки. Из всех, у кого я делала, он лучше всех. Всем советую!!!',
    contact: ''
  },
  {
    id: 8,
    avatar: 'eight',
    name: 'Светлана',
    feedback:
      'Павел, хочу выразить вам свою благодарность за курс проведенных массажей. После вашей умелой техники и сильных, волшебных рук, у меня перестала болеть спина и осанка стала ровнее. Надеюсь повторим курс по весне))) P.S. К хорошему привыкаешь быстро.',
    contact: ''
  },
  {
    id: 9,
    avatar: 'juju_juliya_nails',
    name: 'Юлия',
    feedback:
      'Моя работа - это постоянное напряжение спины, шеи и поясницы. Я очень мучилась головными болями после работы. Стала ходить на массаж к Павлу. После него в теле ощущается легкость и бодрость. Просто кайфую и отдыхаю во время массажа, полный релакс. Так что если вы хотите отдохнуть телом и душой, то добро пожаловать на массаж к Павлу.',
    contact: '@juju_juliya_nails'
  },
  {
    id: 10,
    avatar: 'ten',
    name: 'Алена Михайловна',
    feedback:
      'Обатилась к Павлу в феврале с сильными болями в пояснице и воротниковой зоны. 10 сеансов глубокого массажа спины и тейпирование. Иии... пока про боли не вспоминаю. Понравилось: Профессионализм, Пунктуальность, Ненавязчивость, Доброжелательность, Конфиденц-ть. Павел спасибо огромное!!!',
    contact: ''
  },
  {
    id: 11,
    avatar: 'svetlana',
    name: 'Светлана',
    feedback:
      'Павел, великолепный специалист своего дела . Заботливый, внимательный, отзывчивый. Помог  решить мои проблемы. Спасибо за гвозди, что помог поставить и пройти первый путь. Ни с кем другим, я бы не смогла). С уверенностью РЕКОМЕНДУЮ всем своим знакомым)))',
    contact: '@Sv_cosm'
  },
  {
    id: 12,
    avatar: 'rein',
    name: 'Гаянэ',
    feedback:
      'Здравствуйте всем хочу оставить отзыв о массажисте Павле, знакомы мы с ним уже порядка трех лет. Постоянно с мужем приходим к нему на массаж, Павел делает массаж на совесть, разминает мышцы отлично, сразу видно знаток своего дела, так же по рекомендации Павла недавно попробовали Правило, результат растяжения очень понравился 🥰 обязательно поедем еще ))) спасибо Павлу за прекрасную работу ))) всем советую обращаться к Павлу за помощью при болях в мышцах, особенно кто ходит в спортзал 💪👍',
    contact: '@rein7575'
  },
  {
    id: 13,
    avatar: 'alex_p',
    name: 'Александр',
    feedback:
      'Познакомился с Павлом в далеком 2017 году, когда после травмы плеча и не очень удачной реабилитации попал у нему на сеанс массажа-был разработан план возвращения плечевому поясу мобильности! Буквально после третьего сеанса уже вернулся уверенно в зал-приступил к работе с весами! И вот уже 7 лет пользуюсь его услугами ,переодически посещаю ,много знакомых к нему отправил и получил от них благодарственный камбек! Стал не просто спасителем, но и хорошим товарищем за эти годы! Однозначно рекомендация! Спасибо, Паш🙏',
    contact: '@SaintBeard'
  },
  {
    id: 14,
    avatar: 'elena_ki',
    name: 'Елена',
    feedback:
      'На массаж к Павлу хожу с 2018 года. Очень тактичный, спокойный, внимательный специалист! Сеансы массажа всегда на высшем уровне! Только положительные эмоции! Рада знакомству! И конечно всегда рекомендую Павла, когда спрашивают друзья и знакомые.',
    contact: '@elena_68ki'
  },
  {
    id: 15,
    avatar: 'sahatyi',
    name: 'Алексей',
    feedback:
      'Добрый день друзья, я посещаю массаж у Павла уже в течении нескольких лет, я занимаюсь в спортзале и поэтому мне необходим массаж для восстановления моих мышц, Павел мне очень нравится, он профессионал своего дела всегда качественно делает мне массаж, ходим к Павлу с моей женой, недавно также попробовали Правило очень понравилось, классно восстанавливает и растягивает мышцы 👍 всем рекомендую и Правило и Павла как массажиста 💪 спасибо',
    contact: '@Sahatyi'
  },
  {
    id: 16,
    avatar: 'nataliya',
    name: 'Наталья',
    feedback:
      'Мастер, который полностью отдаeтся процессу и работает не только с отдельными группами мышц, а всем телом в целом. Не отпустит вас, пока сам не будет удовлетворен, тем насколько тщательно проработал все проблемные места)). В ходе массажа применяются разные методики. Помимо массажа, обращались к Павлу и за тейпированием растяжения голеностопа. Эффект очевиден сразу же на следующий день. Если ваш массажист Павел, то вы в надежных руках!',
    contact: '@dar_nat'
  }
];

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section feedback" id="feedbacks" data-astro-cid-6dyv6lvl> <h2 class="section__title feedback" data-astro-cid-6dyv6lvl>Отзывы</h2> <p class="section__subtitle feedback" data-astro-cid-6dyv6lvl>
Благодарю вас за оказанное мне доверие. Мне очень приятно получать от вас
    обратную связь. Благодарю от всей души! С&nbsp;уважением&nbsp;Павел.
</p> ${renderComponent($$result, "FeedbackCarousel", $$FeedbackCarousel, { "slides": feedbacks, "data-astro-cid-6dyv6lvl": true })} </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Feedback.astro", void 0);

const faqs = [
  {
    id: 0,
    time: "26.10.25",
    question: "Где вы принимаете и как можно к вам записаться?",
    answer:
      "В настоящий момент я принимаю в кабинете г. Москва район метро Белорусская. Также работаю по субботам в Термальном комплексе города Мытищи и принимаю у себя. Записаться можно на сайте, через форму.",
  },
  {
    id: 1,
    time: "09.06.18",
    question: "Можно ли есть перед массажем и после него?",
    answer:
      "Желательно поесть минимум за час до процедуры массажа, чтобы у вас не возникло каких-либо сложностей во время сеанса, в частности — ощущение переполненности желудка. Это, как правило, не способствует комфорту во время самой процедуры. Комфортное состояние пациента во время сеанса очень важный момент терапии, который однозначно способствует ее успешности и общему оздоровлению организма. Также перед процедурой не стоит курить или употреблять алкогольные напитки. Непосредственно перед сеансом, если вы очень проголодались, допустимо съесть какой-то фрукт или фруктовый салат. Поесть можно спустя полчаса после массажа.",
  },
  {
    id: 2,
    time: "12.02.17",
    question: "Какие существуют противопоказания к массажу?",
    answer:
      "Грипп, ОРВИ, ангина, любые острые воспалительные процессы. Болезни крови, внутренние кровотечения. Злокачественные новообразования и опухоли. Гнойные процессы любой локализации. Цинга. Остеомиелит. Осложненные формы варикозного расширения вен: тромбоз, тромбофлебиты и трофические язвы, любые острые воспаления кровеносных и лимфатических сосудов. Аневризма аорты и сердца, острая ишемия миокарда. Легочно-сердечная недостаточность третьей степени. Гипер- и гипотонический кризис. Активная форма туберкулеза. Почечная и печеночная недостаточность. Венерические заболевания. Психические заболевания с чрезмерным возбуждением и значительно измененной психикой.",
  },
  {
    id: 3,
    time: "07.05.22",
    question: "Помогает ли Правило при болях в спине?",
    answer:
      "Причин болей в спине великое множество, некоторые из них могут служить противопоказаниями для занятий. Если болевые ощущения возникли из-за острого воспаления, травмы или инфекции – занятия придется отложить. Однако при остеохондрозе, грыжах межпозвоночного диска, сколиозе, нарушениях осанки, миофасциальном синдроме тренировки на Правило рекомендованы для улучшения состояния. Самым главным источником боли в спине является спазм мышц, поддерживающих позвоночник, которые находятся в постоянно гипертонусе. Растянув и расслабив мышцы, мы убираем половину болевого синдрома. Вторая половина боли связана с защемлением тканей, так называемым корешковым синдромом. Растянув позвоночник и суставы, мы высвобождаем ткани из своеобразного капкана, и это позволяет избавиться от боли вообще.",
  },
  {
    id: 4,
    time: "03.06.23",
    question: "Правило VS Массаж",
    answer:
      "Для себя я решил однозначный выбор в сторону Правило. Во первых: один сеанс Правило заменит несколько процедур массажа. Во вторых: работа идет в более глубоких слоях организма, куда существующими техниками массажа трудно и порою просто не добраться. В третьих: это работа на симметрию организма. Ну и конечно: это возможность полностью заменить фитнес и оставаться в отличной форме.",
  },
];

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section _faq" id="faq"> <h2 class="section__title _black">Вопрос - Ответ</h2> <ul class="faq__wrapper"> ${faqs.map((faq, index) => {
    return renderTemplate`<li class="faq__item"> <p class="faq__text question">${faq.question}</p> <p class="faq__text answer">${faq.answer}<span class="faq__data">${faq.time}</span></p> </li>`;
  })} </ul> </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Faq.astro", void 0);

const version = "1.1.0";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentDate = /* @__PURE__ */ new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 2016;
  const versionStr = "Version:" + version;
  function getCopyrightText() {
    return "@ " + startYear + "-" + currentYear + " Studio77";
  }
  return renderTemplate`${maybeRenderHead()}<section class="footer"> <p class="footer__text">${getCopyrightText}</p> <p class="footer__text">${versionStr}</p> </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Footer.astro", void 0);

const $$Jobs = createComponent(($$result, $$props, $$slots) => {
  const jobs = [
    {
      id: 42042,
      time: "11.2024 - 10.2025",
      place: "World Class"
    },
    {
      id: 42022,
      time: "04.2022 - 06.2024",
      place: "\u0422\u0435\u0440\u043C\u044B"
    },
    {
      id: 82021,
      time: "08.2021 - 03.2023",
      place: "Vertex"
    },
    {
      id: 22020,
      time: "02.2020 - 06.2021",
      place: "IronFitness"
    },
    {
      id: 82019,
      time: "08.2019 - 03.2020",
      place: "Ohana"
    },
    {
      id: 22019,
      time: "02.2019 - 05.2021",
      place: "Gretta"
    },
    {
      id: 102016,
      time: "10.2016 - 05.2018",
      place: "\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section _jobs" data-astro-cid-j7bzabwg> ${jobs.map((job, index) => {
    return renderTemplate`<div class="job__wrapper" data-astro-cid-j7bzabwg> <div class="job__outside" data-astro-cid-j7bzabwg> <h3 class="job__index" data-astro-cid-j7bzabwg>${index + 1}</h3> <div class="job__inside" data-astro-cid-j7bzabwg> <h3 class="job__title" data-astro-cid-j7bzabwg>${job.place}</h3> <p class="job__date" data-astro-cid-j7bzabwg>${job.time}</p> </div> </div> </div>`;
  })} </section> `;
}, "/Users/macbook/dev/MY/massage-astro/src/components/sections/Jobs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "First", $$First, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Jobs", $$Jobs, {})} ${renderComponent($$result2, "Certificates", $$Certificates, {})} ${renderComponent($$result2, "Feedback", $$Feedback, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/Users/macbook/dev/MY/massage-astro/src/pages/index.astro", void 0);

const $$file = "/Users/macbook/dev/MY/massage-astro/src/pages/index.astro";
const $$url = "/pmt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
