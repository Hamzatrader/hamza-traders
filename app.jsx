import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HamzaTraders() {
  const [coin, setCoin] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [comment, setComment] = useState("");
  const [screenshots, setScreenshots] = useState([]);
  const [signalPosted, setSignalPosted] = useState(false);

  const handleFileUpload = (e) => {
    setScreenshots([...e.target.files]);
  };

  const handleSubmit = () => {
    setSignalPosted(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Hamza Traders - Signal Uploader</h1>

      <Card className="mb-4">
        <CardContent className="space-y-4">
          <Input
            placeholder="Coin Name (e.g., BTCUSDT)"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />

          <Input
            placeholder="Timeframe (e.g., 1H, 4H)"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          />

          <Textarea
            placeholder="Your Comment or Analysis"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
          />

          <Button className="w-full" onClick={handleSubmit}>
            Upload Signal
          </Button>
        </CardContent>
      </Card>

      {signalPosted && (
        <Card className="mt-6">
          <CardContent>
            <h2 className="text-xl font-semibold">✅ Signal Posted</h2>
            <p><strong>Coin:</strong> {coin}</p>
            <p><strong>Timeframe:</strong> {timeframe}</p>
            <p><strong>Comment:</strong> {comment}</p>
            <p><strong>Screenshots:</strong></p>
            <ul className="list-disc pl-6">
              {screenshots.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
          }
