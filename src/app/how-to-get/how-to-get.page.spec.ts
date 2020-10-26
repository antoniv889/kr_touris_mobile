import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToGetPage } from './how-to-get.page';

describe('HowToGetPage', () => {
  let component: HowToGetPage;
  let fixture: ComponentFixture<HowToGetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToGetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToGetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
