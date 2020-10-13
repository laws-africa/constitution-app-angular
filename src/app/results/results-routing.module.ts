import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsPage } from './results.page';

const routes: Routes = [
  {
    path: '',
    component: ResultsPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../casedetail/casedetail.module').then((m) => m.CaseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsPageRoutingModule {}
