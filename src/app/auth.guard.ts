import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CoreService } from './core/core.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  const _coreService=inject(CoreService)
  let isloggedIn= sessionStorage.getItem("isloggedIn");
  if(isloggedIn=='false') {
    _coreService.openSnackBar('Login Failed Please Try again!!', 'Done')
    _router.navigate(['login']);
    return false;
  }
  return true;
};
