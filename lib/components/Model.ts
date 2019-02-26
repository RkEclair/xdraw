/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 * @author RkEclair / https://github.com/RkEclair
 */

import Transform from '../basis/Transform';
import Unlit from './materials/Unlit';
import BoxMesh from './meshes/BoxMesh';
import PlaneMesh from './meshes/PlaneMesh';

export function BackgroundPlane(width = 1, height = 1) {
  const t = new Transform;
  t.recieveRaycast = false;
  t.recieveShadow = false;
  t.castShadow = false;
  t.comps.add(PlaneMesh(width, height));
  t.comps.add(Unlit());
  return t;
}

export function BackgroundBox(width = 1, height = 1, depth = 1) {
  const t = new Transform;
  t.comps.add(BoxMesh(width, height, depth));
  t.comps.add(Unlit());
  return t;
}