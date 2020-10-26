import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourObjectPage } from './tour-object.page';

describe('TourObjectPage', () => {
  let component: TourObjectPage;
  let fixture: ComponentFixture<TourObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
