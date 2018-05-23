import { Observable } from 'tns-core-modules/data/observable';
import { VersionNumber } from 'nativescript-version-number';

export class HelloWorldModel extends Observable {
  public message: string;
  private versionNumber: VersionNumber;

  constructor() {
    super();

    this.versionNumber = new VersionNumber();
    this.message = this.versionNumber.message;
  }
}
