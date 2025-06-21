import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastLista } from './podcast-lista';

describe('PodcastLista', () => {
  let component: PodcastLista;
  let fixture: ComponentFixture<PodcastLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
