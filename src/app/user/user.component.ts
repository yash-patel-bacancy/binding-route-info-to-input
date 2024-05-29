import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() query?: string;
  @Input() id?: string;
  @Input() title?: string;

  @Input({ required: true, alias: 'elementId' }) elId?: string;

  private route = inject(ActivatedRoute);

  query$ = this.route.queryParams.pipe(map(queryParams => queryParams['q']));
  id$ = this.route.params.pipe(map(params => params['id']));
  title$ = this.route.data.pipe(map(data => data['title']));

 ngOnInit() {
    this.query$.subscribe(query => {  });
    this.id$.subscribe(id => { });
    this.title$.subscribe(title => { });
  }
}
