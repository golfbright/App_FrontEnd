import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtaskBookedCardealerPage } from './showtask-booked-cardealer.page';

describe('ShowtaskBookedCardealerPage', () => {
  let component: ShowtaskBookedCardealerPage;
  let fixture: ComponentFixture<ShowtaskBookedCardealerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtaskBookedCardealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtaskBookedCardealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
