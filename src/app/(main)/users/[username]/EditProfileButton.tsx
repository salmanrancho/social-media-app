"use client";

import { Button } from "@/components/ui/button";
import { UserData } from "@/lib/types";
import { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";

interface EditProfileButtonProps {
  user: UserData;
}

export default function EditProfileButton({ user }: EditProfileButtonProps) {
  const [showDialogue, setShowDialogue] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setShowDialogue(true)}>
        Edit Profile
      </Button>
      <EditProfileDialog
        user={user}
        open={showDialogue}
        onOpenChange={setShowDialogue}
      />
    </>
  );
}
