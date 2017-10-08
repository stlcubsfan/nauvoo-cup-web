import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function zipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (control.value) {
      const valid = /^\d{5}(?:-\d{4})?$/.test(control.value);
      return !valid ? {'appZipCodeValidation': {value: control.value}} : null;
    } else {
      return null;
    }

  };
}

@Directive({
  selector: '[appZipCodeValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ZipCodeValidationDirective, multi: true}]
})
export class ZipCodeValidationDirective implements Validator{

  validate(control: AbstractControl): {[key: string]: any} {
    return zipCodeValidator()(control)
  }

}
