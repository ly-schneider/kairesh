import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekteDetailComponent } from './projekte-detail.component';

describe('ProjekteDetailComponent', () => {
  let component: ProjekteDetailComponent;
  let fixture: ComponentFixture<ProjekteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjekteDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjekteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
