import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceObjectPage } from './place-object.page';

describe('PlaceObjectPage', () => {
  let component: PlaceObjectPage;
  let fixture: ComponentFixture<PlaceObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
