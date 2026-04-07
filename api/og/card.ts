import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

// Tiny createElement helper to avoid JSX so Vercel reliably treats this as
// an edge function (lesson learned from FireReady).
type Child = unknown;
function h(type: string, props: Record<string, unknown> | null, ...children: Child[]): unknown {
  return {
    type,
    props: { ...(props || {}), children: children.length === 1 ? children[0] : children },
  };
}

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);

  const acres = Math.max(0.1, Math.min(10000, parseFloat(searchParams.get('acres') || '5')));
  const location = (searchParams.get('location') || 'Santa Fe, NM').slice(0, 40);

  // Per-acre cost models (rough industry averages).
  const manualPerAcre = 1500; // mow + haul + herbicide
  const goatPerAcre = 400;
  const manualCost = acres * manualPerAcre;
  const goatCost = acres * goatPerAcre;
  const savings = manualCost - goatCost;
  const savingsPct = Math.round((savings / manualCost) * 100);

  const header = h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
      },
    },
    h(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
      h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            backgroundColor: '#3D5A2A',
            color: '#FFFFFF',
            borderRadius: '14px',
            fontSize: '32px',
            fontWeight: 900,
          },
        },
        'SFGG'
      ),
      h(
        'div',
        { style: { display: 'flex', flexDirection: 'column' } },
        h(
          'div',
          { style: { fontSize: '34px', fontWeight: 800, color: '#2C3E0F', lineHeight: 1 } },
          'Santa Fe Goat Guys'
        ),
        h(
          'div',
          { style: { fontSize: '18px', color: '#6B7B4F', marginTop: '4px' } },
          'Targeted goat grazing for wildfire defense'
        )
      )
    ),
    h(
      'div',
      { style: { fontSize: '20px', color: '#6B7B4F', fontWeight: 600 } },
      'santafegoatguys.com'
    )
  );

  const savingsCard = h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '440px',
        backgroundColor: '#3D5A2A',
        borderRadius: '20px',
        padding: '36px 20px',
      },
    },
    h(
      'div',
      {
        style: {
          fontSize: '22px',
          color: '#E8F0D6',
          fontWeight: 700,
          letterSpacing: '2px',
        },
      },
      'YOU SAVE'
    ),
    h(
      'div',
      {
        style: {
          fontSize: '120px',
          fontWeight: 900,
          color: '#FFFFFF',
          lineHeight: 1,
          marginTop: '8px',
        },
      },
      fmt(savings)
    ),
    h(
      'div',
      {
        style: {
          fontSize: '28px',
          color: '#FFFFFF',
          fontWeight: 700,
          marginTop: '4px',
        },
      },
      `${savingsPct}% less than manual`
    ),
    h(
      'div',
      { style: { fontSize: '16px', color: '#E8F0D6', marginTop: '12px' } },
      `vs traditional clearing on ${acres} acres`
    )
  );

  const compareRow = (label: string, value: string, color: string) =>
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          padding: '14px 18px',
          backgroundColor: '#F5F0E1',
          borderLeft: `6px solid ${color}`,
          borderRadius: '10px',
          marginBottom: '12px',
        },
      },
      h(
        'div',
        { style: { fontSize: '16px', color: '#6B7B4F', fontWeight: 600 } },
        label
      ),
      h(
        'div',
        {
          style: {
            fontSize: '34px',
            color: '#2C3E0F',
            fontWeight: 900,
            marginTop: '2px',
          },
        },
        value
      )
    );

  const rightCol = h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '40px',
        flex: 1,
        justifyContent: 'space-between',
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      h(
        'div',
        {
          style: {
            fontSize: '20px',
            color: '#6B7B4F',
            fontWeight: 600,
            letterSpacing: '1px',
          },
        },
        'PROPERTY'
      ),
      h(
        'div',
        {
          style: {
            fontSize: '38px',
            color: '#2C3E0F',
            fontWeight: 800,
            marginTop: '6px',
            lineHeight: 1.1,
          },
        },
        `${acres} acres`
      ),
      h(
        'div',
        { style: { fontSize: '20px', color: '#6B7B4F', marginTop: '2px' } },
        location
      )
    ),
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      compareRow('Manual clearing', fmt(manualCost), '#C0392B'),
      compareRow('Goat grazing', fmt(goatCost), '#3D5A2A')
    )
  );

  const card = h(
    'div',
    {
      style: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      },
    },
    savingsCard,
    rightCol
  );

  const footer = h(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
      },
    },
    h(
      'div',
      { style: { fontSize: '18px', color: '#6B7B4F' } },
      'Free quote in 24 hours. Serving New Mexico.'
    ),
    h(
      'div',
      { style: { fontSize: '18px', color: '#3D5A2A', fontWeight: 700 } },
      'santafegoatguys.com'
    )
  );

  const root = h(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F5F0E1',
        fontFamily: 'sans-serif',
        padding: '50px',
      },
    },
    header,
    card,
    footer
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new ImageResponse(root as any, { width: 1200, height: 630 });
}
