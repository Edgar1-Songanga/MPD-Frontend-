import React from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-600">MAGESTADE</h2>
        </div>
        <nav className="mt-4">
          <Link href="/workspace/workforce" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Workforce
          </Link>
          <Link href="/workspace/academy" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Academy
          </Link>
          <Link href="/workspace/billing" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Billing
          </Link>
          <Link href="/workspace/incidents" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Incidents
          </Link>
          <Link href="/workspace/offshore" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Offshore
          </Link>
          <Link href="/workspace/compliance" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">
            Compliance
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
