import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GidsPage } from './gids.page';

describe('GidsPage', () => {
  let component: GidsPage;
  let fixture: ComponentFixture<GidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
