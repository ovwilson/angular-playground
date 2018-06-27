import { sandboxOf } from 'angular-playground';
import { SharedModule } from './../../shared/shared.module';
import { AdminComponent } from './admin.component';

export default sandboxOf(AdminComponent, {
  imports: [SharedModule],
  declarations: [AdminComponent]
}).add('Admin Component', {
  template: `<app-admin></app-admin>`
});
