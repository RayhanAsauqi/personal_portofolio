import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Briefcase,
  ExternalLink,
  Building,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ExperienceState } from "@/app/api/experiences/[slug]/route";

type ExperienceDetailProps = {
  isOpen: boolean;
  setIsOpenAction: (isOpen: boolean) => void;
  slug: string;
};

export default function ExperienceDetail({
  isOpen,
  setIsOpenAction,
  slug,
}: ExperienceDetailProps) {
  const [detail, setDetail] = useState<ExperienceState | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const fetchExperienceDetail = async () => {
      try {
        const response = await fetch(`/api/experiences/${slug}`);
        if (!response.ok) {
          setDetail(null);
          return;
        }
        const detailData = await response.json();
        setDetail(detailData);
      } catch {
        setDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceDetail();
  }, [slug, isOpen]);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpenAction}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0 p-6 pb-4 rounded-t-md">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className="text-xs font-medium bg-primary/10 text-primary"
            >
              {detail?.type}
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold text-primary pt-2">
            {detail?.title}
          </DialogTitle>
          <div className="flex items-center gap-2 mt-1">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-lg">{detail?.company}</span>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Period</div>
                    <div className="font-medium">{detail?.period}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">{detail?.location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {detail?.description}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {detail?.responsibilities?.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail?.technologies?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/5 hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {detail?.current_period}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0 h-auto"
                    asChild
                  >
                    <a
                      href={detail?.company ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit Company
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


