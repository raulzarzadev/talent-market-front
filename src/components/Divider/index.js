export default function Divider({ orientation = 'vertical', width = '5px' }) {
  if (orientation === 'horizontal')
    return (
      <div
        style={{
          borderLeft:`${width} solid #fff`,
          height: 2,
          alignSelf: 'center',
        }}
      />
    )
  return (
    <div
      style={{
        borderLeft: '2px solid #fff',
        height: 20,
        alignSelf: 'center',
        margin: 4,
      }}
    />
  )
}
