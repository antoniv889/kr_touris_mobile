import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastroPage } from './gastro.page';

describe('GastroPage', () => {
  let component: GastroPage;
  let fixture: ComponentFixture<GastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
