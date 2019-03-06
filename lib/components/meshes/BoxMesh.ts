/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 * @author RkEclair / https://github.com/RkEclair
 */

import {unmapBinds, XBind, XBindMap, XComponent, XStore} from '../../basis/Components';
import Transform from '../../basis/Transform';

import {packMesh} from './MeshUtils';

export default class BoxMesh implements XComponent {
  binds: XBindMap;
  constructor(width = 1, height = 1, depth = 1) {
    this.binds = {
      width: new XBind(width),
      height: new XBind(height),
      depth: new XBind(depth)
    };
  }

  update(store: XStore, _transform: Transform) {
    /* Faces
            1_____0_____3
            | 9   | 7   |
            |   8 |   6 |
0_____1_____5_____4_____7
|  12 |  10 | 2   |
| 13  | 3&11|   1 |
3_____2_____6_____7_____4
            | 4   | 6   |
            |   5 |   7 |
            2_____3_____0
     */
    const self = unmapBinds(this.binds);

    const indices: number[] = [7, 4, 6, 5, 2, 7, 3, 4, 0, 5, 1, 6, 2, 0, 3];
    const vertices: number[] =
        [
          self.width,  self.height,  self.depth,   self.width,  -self.height,
          self.depth,  -self.width,  -self.height, self.depth,  -self.width,
          self.height, self.depth,   self.width,   self.height, -self.depth,
          self.width,  -self.height, -self.depth,  -self.width, -self.height,
          -self.depth, -self.width,  self.height,  -self.depth,
        ].map(e => e / 2),
                    normals: number[] =
                        [
                          1, 1, 1,  1, -1, 1,  -1, -1, 1,  -1, 1, 1,
                          1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1
                        ],
                    uvs: number[] = [];

    packMesh(store, {indices, vertices, normals, uvs});
  }
}
