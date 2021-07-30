Videos:
- https://www.youtube.com/watch?v=L95mA_h0CjA
- https://www.youtube.com/watch?v=pCKRWSNIaNQ

# Hand Shape Analysis

The most prominent feature of signed languages, is their use of the hands.
The hands play an important role in the phonetics of signs, and a slight variation in them can create variations in meaning.

We use 3D pose estimation to extract a semi-accurate hand skeletal representation, 
and perform various techniques to extract meaningful information for sign language, 
based on the SignWriting definitions of the five major axis of variation -
handedness; plane; rotation; view; and shape.

## Handedness
Handedness is the distinction between the right, and left hand.
Signed Languages make a distinction between the dominant hand, and non-dominant hand 
(for right-handed individuals, the right hand is considered dominant, and vice-versa).
One should use their dominant hand for fingerspelling, and all one-handed signs,
and their non-dominant hand for support (e.g. enumeration), and two-handed signs.

Using pose estimation, the handedness analysis is trivial,
as the pose estimation platform predicts which hand is which.

## Plane

Plane is the distinction of signs in which the hand is parallel to the wall, or parallel to the floor.
The variation in plane can - but not necessarily - create a distinction between two signs.
For example, in ASL the signs for "date" (a social or romantic appointment or engagement), and for "dessert",
exhibit the same hand shape, view, rotation, contact, and movement, but differ by plane.

**Date**  vs **Dessert**

![date](https://www.signbank.org/signpuddle2.0/glyphogram.php?text=AS10110S10118S20600M17x22S101101xn21S10118n17xn21S20600n11x11&pad=10&name=date)
![dessert](https://www.signbank.org/signpuddle2.0/glyphogram.php?text=AS10140S10148S20600M17x21S101401xn22S10148n17xn22S20600n11x10&pad=10&name=dessert)

To analyze each hand's plane, we compare the *dy* and *dz* of the *middle finger metacarpal bone* (spanning from the *wrist* (or *sst*), to the *middle finger metacarpophalngeal joint* (or *mmcp*)).
If $dy = |mmcp.y - sst.y|$ is greater than $dz = |mmcp.z - sst.z|$ we consider the hand parallel to the wall plane. 
Otherwise, we consider the hand parallel to the floor plane.


## Rotation

Rotation is the *∠XY* angle of a hand in relation to the body.
SignWriting groups the hand rotation into eight equal buckets, each spanning 45 degrees - $B_i = [-22.5 + 45*i, 22.5 + 45*i]$.

To analyze each hand's rotation, we calculate the angle of the line created by the *middle finger metacarpal bone* -
$tan^{-1}(mmcp.y - sst.y / mmcp.x - sst.x)$, and find the bucket it should be categorized to.

## View

View is the distinction between the hand's various *y* rotations, grouped to four categories:
1. Outwards - the signer can only observe the back of their hand.
2. Inwards - the signer can only observe the front of their hand.
3. Sideways - the signer can observe both sides of their hand. The back of the hand on the same side as its handedness (e.g, the back of the hand on the right side, for the right hand).
3. Other-sideways - the signer can observe both sides of their hand, but the hand is rotated to the other side than 3.

TODO - define these better.

To estimate each hand's view, we analyze the normal of the plane created by the palm of the hand.
We define the plane created by the palm of the hand as the plane created by the following three points:
1. Index finger metacarpophalngeal joint
2. Wrist (Scaphotrapeziotrapezoidal (SST) joint)
3. Little finger metacarpophalngeal joint.

If the normal is TODO ...

## Shape

TODO