import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastFormulario } from './podcast-formulario';

describe('PodcastFormulario', () => {
  let component: PodcastFormulario;
  let fixture: ComponentFixture<PodcastFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
