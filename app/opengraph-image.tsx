import { ImageResponse } from 'next/og'
import { EMAIL } from './content'

export const alt = 'Guilherme Lopes, desenvolvedor full stack sênior e tech lead de front end'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Mesmos tokens do site: chumbo, tinta clara e o azul de sinal.
const PAPER = '#15171a'
const INK = '#eceef1'
const MUTED = '#9ba1a9'
const ACCENT = '#7fd0ff'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: PAPER,
          color: INK,
          borderTop: `10px solid ${ACCENT}`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 14, height: 14, background: ACCENT, transform: 'rotate(45deg)' }} />
            <div style={{ fontSize: 24, letterSpacing: 4, color: MUTED }}>GOIÂNIA, BR · REMOTO</div>
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Guilherme Lopes
          </div>
          <div style={{ fontSize: 38, color: MUTED, lineHeight: 1.3 }}>
            Desenvolvedor full stack sênior e tech lead de front end
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 26 }}>
          <div style={{ color: ACCENT }}>+133% de uso no módulo de vendas</div>
          <div style={{ width: 8, height: 8, background: MUTED, transform: 'rotate(45deg)' }} />
          <div style={{ color: MUTED }}>{EMAIL}</div>
        </div>
      </div>
    ),
    size,
  )
}
