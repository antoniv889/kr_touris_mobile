import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventObjectPage } from './event-object.page';

describe('EventObjectPage', () => {
  let component: EventObjectPage;
  let fixture: ComponentFixture<EventObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventObjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
