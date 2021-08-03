import { TestBed } from '@angular/core/testing';

import { LoginGuardsService } from './login-guards.service';

describe('LoginGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuardsService = TestBed.get(LoginGuardsService);
    expect(service).toBeTruthy();
  });
});
