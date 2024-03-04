import { HttpInterceptorFn } from '@angular/common/http';

export const aTMInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
