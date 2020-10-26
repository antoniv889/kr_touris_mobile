import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteObjectPage } from './route-object.page';

describe('RouteObjectPage', () => {
  let component: RouteObjectPage;
  let fixture: ComponentFixture<RouteObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
