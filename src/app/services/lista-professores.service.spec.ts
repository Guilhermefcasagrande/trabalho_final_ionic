import { TestBed } from '@angular/core/testing';

import { ListaProfessoresService } from './lista-professores.service';

describe('ListaProfessoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaProfessoresService = TestBed.get(ListaProfessoresService);
    expect(service).toBeTruthy();
  });
});
