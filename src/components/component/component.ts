export abstract class Component {
  selector!: string;
  element!: HTMLElement;
  template!: string;

  render(place: globalThis.InsertPosition) {
    const setElement = {
      afterbegin: () =>
        document.querySelector(this.selector)?.firstElementChild,
      afterend: () => document.querySelector(this.selector)?.nextElementSibling,
      beforebegin: () =>
        document.querySelector(this.selector)?.previousElementSibling,
      beforeend: () => document.querySelector(this.selector)?.lastElementChild,
    };

    const initialElement = document.querySelector(this.selector) as HTMLElement;
    initialElement.insertAdjacentHTML(place, this.template);
    this.element = setElement[place]() as HTMLElement;
  }
}
