import { Component, Input } from '@angular/core';

/**
 * Botão personalizado para a aplicação.
 *
 * @description
 * Botão personalizado e customizável.
 *
 * @param idBtn tag id do html.
 * @param classBtn classe de estilo do botão, btn-primary | btn-secondary | btn-link.
 * @param typeBtn type do botão button | submit | reset.
 * @param ariaLabelBtn tag de acessibilidade, um texto descritivo do botão.
 * @param title tag title padrão opcional.
 * @param textBtn texto do botão.
 * @param disableBtn Habilita ou Desabilita o botão.
 *
 * @usageNotes
 *
 * ### Como Usar
 *
 * ```html
 * <app-button
 *  idBtn="id-button"
 *  classBtn="btn-link"
 *  typeBtn="button"
 *  ariaLabelBtn="Texto detalhando o botão acessibilidade"
 *  title="tag title do botão"
 *  textBtn="Texto do Botão"
 * >
 * <span>Icon</span>
 * Texto do Botão
 * </app-button>
 * ```
 * @publicApi
 */
@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() idBtn: string = '';
  @Input() classBtn: string = '';
  @Input() typeBtn: string = 'button';
  @Input() ariaLabelBtn: string = '';
  @Input() textBtn: string = '';
  @Input() title: string = '';
  @Input() disableBtn: boolean = false;
}
