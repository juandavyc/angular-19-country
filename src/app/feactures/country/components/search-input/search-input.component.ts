import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {

  public value = output<string>();

  public placeholder = input.required<string>();

  public initialValue = input<string>('');

  public inputValue = linkedSignal({
    source: () => this.initialValue(),
    computation: (source: string ) => source ?? ''
  })

  public emmitValue(value:string){
    this.value.emit(value)
  }

}
