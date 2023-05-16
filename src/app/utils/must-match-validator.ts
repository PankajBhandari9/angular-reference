import { FormGroup } from '@angular/forms';

export function MisMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // these 2 controls have any other errrors/ validation problem ?
    // min 8 chars .?
    if (matchingControl.errors && !matchingControl.errors['mustMatch'])
      //
      return;
    if (control.value != matchingControl.value) {
      // set errors spec.
      matchingControl.setErrors({ mustMatch: true });
    } else {
      // we have set no errors
      matchingControl.setErrors(null);
    }
  };
}
