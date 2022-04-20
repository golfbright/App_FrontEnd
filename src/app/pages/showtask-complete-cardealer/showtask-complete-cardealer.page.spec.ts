import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtaskCompleteCardealerPage } from './showtask-complete-cardealer.page';

describe('ShowtaskCompleteCardealerPage', () => {
  let component: ShowtaskCompleteCardealerPage;
  let fixture: ComponentFixture<ShowtaskCompleteCardealerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtaskCompleteCardealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtaskCompleteCardealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
