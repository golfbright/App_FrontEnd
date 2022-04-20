import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtaskProgressCardealerPage } from './showtask-progress-cardealer.page';

describe('ShowtaskProgressCardealerPage', () => {
  let component: ShowtaskProgressCardealerPage;
  let fixture: ComponentFixture<ShowtaskProgressCardealerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtaskProgressCardealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtaskProgressCardealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
