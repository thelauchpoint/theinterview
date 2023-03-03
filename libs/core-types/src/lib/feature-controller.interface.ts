import { Observable } from 'rxjs';
import { IFeature } from './feature.interface';

/**
 * @route @Controller('commercial-auto-program-document')
 */
export interface IFeatureController {
  /**
   *
   * @param params
   *
   * @security Account types [ADMIN,INSURED]
   * @roles ['super_admin]
   */
  get(): Promise<IFeature> | Observable<IFeature>;
}
