import { AbstractControl, ValidatorFn } from '@angular/forms';

export function AlllowedCountriesValidator(countries: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const allowed = countries.indexOf(control.value as string) !== -1;
    return allowed ? null : { allowedCountries: true };
  };
}
