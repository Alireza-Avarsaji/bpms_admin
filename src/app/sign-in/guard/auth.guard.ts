import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CustomLocalStorage } from 'src/app/core/sorage/custom-local-storage';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const repo = inject(CustomLocalStorage);
  if (repo.getItem('access_token'))
    return true;
  else {
    router.navigate(['/sign-in']);
    return false;
  }

};
