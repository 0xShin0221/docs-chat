"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react"

// モックのPDFデータ
const mockPDFPages = [
  "/placeholder.svg?height=800&width=600",
  "/placeholder.svg?height=800&width=600",
  "/placeholder.svg?height=800&width=600",
]

export default function PDFViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const totalPages = mockPDFPages.length

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const zoomIn = () => {
    if (zoom < 2) {
      setZoom(zoom + 0.1)
    }
  }

  const zoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.1)
    }
  }

  const rotate = () => {
    setRotation((rotation + 90) % 360)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="px-4 py-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xl">PDF ビューア</CardTitle>
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" onClick={zoomOut} title="縮小">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={zoomIn} title="拡大">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={rotate} title="回転">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-0 relative overflow-auto">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
            transformOrigin: "center center",
            transition: "transform 0.2s ease",
          }}
        >
          <img
            src={mockPDFPages[currentPage - 1] || "/placeholder.svg"}
            alt={`PDF ページ ${currentPage}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </CardContent>
      <div className="p-2 border-t flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm">
          {currentPage} / {totalPages}
        </span>
        <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

