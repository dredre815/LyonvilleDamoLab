import PropTypes from 'prop-types';


export const HamburgerIcon = ({ onClick }) => (
  <div 
    className="hover:scale-95 duration-500"
    onClick={onClick}
    style={{position: 'relative', cursor: 'pointer'}}
  >
    <div style={{
      width: 26.60, height: 25, left: 20, top: 0, position: 'relative', 
      background: '#ACB594', borderRadius: 9999
    }} />
    <div style={{
      width: 11.70, height: 4.26, left: 27.45, top: 4.79, position: 'absolute', 
      background: '#F4F3D7', borderRadius: 9999, border: '0.20px green solid'
    }} />
    <div style={{
      width: 11.70, height: 4.26, left: 27.45, top: 10.11, position: 'absolute', 
      background: '#F4F3D7', borderRadius: 9999, border: '0.20px green solid'
    }} />
    <div style={{
      width: 11.70, height: 4.26, left: 27.45, top: 15.43, position: 'absolute', 
      background: '#F4F3D7', borderRadius: 9999, border: '0.20px green solid'
    }} />
  </div>
);

HamburgerIcon.propTypes = {
  onClick: PropTypes.any,
}