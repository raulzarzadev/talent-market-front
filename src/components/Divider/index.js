export default function Divider({ orientation = 'vertical' }) {
  if (orientation === 'horizontal')
    return (
      <div
        style={{
          borderLeft: '5px solid #fff',
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
