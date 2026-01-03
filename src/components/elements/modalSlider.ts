export class ModalSlider {
  private modal: HTMLElement | null = null;
  private slides: NodeListOf<HTMLElement> | null = null;
  private indicators: NodeListOf<HTMLElement> | null = null;
  private sliderContainer: HTMLElement | null = null;
  private currentSlide: number = 0;

  // Для обработки свайпа
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private touchStartY: number = 0;
  private touchEndY: number = 0;
  private minSwipeDistance: number = 50;
  private isSwiping: boolean = false;

   // Для обработки колесика мыши
  private wheelTimeout: number | null = null;
  private wheelCooldown: number = 500; // Задержка между переключениями (мс)
  private wheelDeltaThreshold: number = 30; // Минимальное значение для срабатывания

  private $body = document.querySelector(".body");

  constructor() {
    this.initialize();
  }

  initialize() {
    this.modal = document.getElementById("modal-slider");
    if (!this.modal) {
      console.error("Modal element not found");
      return;
    }

    this.slides = this.modal.querySelectorAll(".slider__slide");
    this.indicators = this.modal.querySelectorAll(".slider__indicator");
    this.sliderContainer = this.modal.querySelector(".slider__container");

    this.bindEvents();
  }

  bindEvents() {
    if (!this.modal || !this.sliderContainer) return;

    const closeBtn = this.modal.querySelector(".modal__close");
    const overlay = this.modal.querySelector(".modal__overlay");
    const prevBtn = this.modal.querySelector(".slider__nav--prev");
    const nextBtn = this.modal.querySelector(".slider__nav--next");

    closeBtn?.addEventListener("click", () => this.close());
    overlay?.addEventListener("click", () => this.close());
    prevBtn?.addEventListener("click", () => this.prevSlide());
    nextBtn?.addEventListener("click", () => this.nextSlide());

    this.indicators?.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });

    // Обработка свайпа на тач-устройствах
    this.sliderContainer.addEventListener("touchstart", (e) =>
      this.handleTouchStart(e)
    );
    this.sliderContainer.addEventListener("touchmove", (e) =>
      this.handleTouchMove(e)
    );
    this.sliderContainer.addEventListener("touchend", () =>
      this.handleTouchEnd()
    );

    // Обработка мыши для десктопов
    this.sliderContainer.addEventListener("mousedown", (e) =>
      this.handleMouseDown(e)
    );
    this.sliderContainer.addEventListener("mousemove", (e) =>
      this.handleMouseMove(e)
    );
    this.sliderContainer.addEventListener("mouseup", () =>
      this.handleMouseUp()
    );
    this.sliderContainer.addEventListener("mouseleave", () =>
      this.handleMouseLeave()
    );

    // Клавиши клавиатуры
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal?.classList.contains("active")) {
        this.close();
      } else if (e.key === "ArrowLeft") {
        this.prevSlide();
      } else if (e.key === "ArrowRight") {
        this.nextSlide();
      }
    });

    // Обработка колесика мыши с троттлингом
    this.sliderContainer.addEventListener("wheel", (e) => this.handleWheel(e), {
      passive: false,
    });
  }

  // Обработка тач-событий
  private handleTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
    this.isSwiping = true;
  }

  private handleTouchMove(e: TouchEvent) {
    if (!this.isSwiping) return;
    e.preventDefault();
    this.touchEndX = e.touches[0].clientX;
    this.touchEndY = e.touches[0].clientY;
  }

  private handleTouchEnd() {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    this.handleSwipe();
  }

  // Обработка событий мыши
  private handleMouseDown(e: MouseEvent) {
    this.touchStartX = e.clientX;
    this.touchStartY = e.clientY;
    this.isSwiping = true;
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.isSwiping) return;
    this.touchEndX = e.clientX;
    this.touchEndY = e.clientY;
  }

  private handleMouseUp() {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    this.handleSwipe();
  }

  private handleMouseLeave() {
    this.isSwiping = false;
  }

  // Обработка колесика мыши
  private handleWheel(e: WheelEvent) {
    // Предотвращаем скролл страницы
    e.preventDefault();

    // Если уже есть активный таймаут, игнорируем новое событие
    if (this.wheelTimeout !== null) {
      return;
    }

    // Определяем, является ли скролл горизонтальным
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    // Используем горизонтальный скролл, если он есть, иначе вертикальный
    const delta = isHorizontalScroll ? e.deltaX : e.deltaY;

    // Проверяем, достаточно ли большое изменение для срабатывания
    if (Math.abs(delta) < this.wheelDeltaThreshold) {
      return;
    }

    // Определяем направление
    if (delta > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }

    // Устанавливаем таймаут для предотвращения слишком частых переключений
    this.wheelTimeout = window.setTimeout(() => {
      this.wheelTimeout = null;
    }, this.wheelCooldown);
  }

  // Определение направления свайпа
  private handleSwipe() {
    if (!this.slides) return;

    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    // Проверяем, что свайп преимущественно горизонтальный
    if (
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaX) > this.minSwipeDistance
    ) {
      if (deltaX > 0) {
        // Свайп вправо -> предыдущий слайд
        this.prevSlide();
      } else {
        // Свайп влево -> следующий слайд
        this.nextSlide();
      }
    }

    // Сброс значений
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchStartY = 0;
    this.touchEndY = 0;
  }

  open(initialSlide = 0) {
    if (!this.modal || !this.slides) {
      this.initialize(); // Инициализируем, если еще не сделано
    }
    
    if (!this.modal || !this.slides) {
      console.error("Modal or slides not found");
      return;
    }

    this.$body && this.$body.classList.toggle("_unscroll");
    
    // Ограничиваем индекс в пределах количества слайдов
    const slideCount = this.slides.length;
    this.currentSlide = Math.max(0, Math.min(initialSlide, slideCount - 1));
  
    this.updateSlider();
    this.modal.classList.add("active");
    this.modal.focus();
  }

  close() {
    if (!this.modal) return;

    this.$body && this.$body.classList.toggle("_unscroll");
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  nextSlide() {
    if (!this.slides) return;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlider();
  }

  prevSlide() {
    if (!this.slides) return;
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlider();
  }

  goToSlide(index: number) {
    if (!this.slides || index < 0 || index >= this.slides.length) return;
    this.currentSlide = index;
    this.updateSlider();
  }

  updateSlider() {
    this.slides?.forEach((slide, index) => {
      slide.classList.toggle("active", index === this.currentSlide);

      // Добавляем transition для плавности
      slide.style.transition = "transform 0.3s ease";

      // Смещаем слайды
      const offset = (index - this.currentSlide) * 100;
      slide.style.transform = `translateX(${offset}%)`;
    });

    this.indicators?.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentSlide);
    });
  }
}
