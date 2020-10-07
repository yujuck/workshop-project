import { observable } from 'mobx';

export class PointStore {
  @observable
  private _point : number = 0;

  constructor(point:number){
    this._point = point
  }

  public getPoint(): number{
    return this._point;
  }

  public setPoint(point:number): void{
    this._point = point;
  }
}